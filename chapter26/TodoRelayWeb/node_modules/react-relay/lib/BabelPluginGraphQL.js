/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BabelPluginGraphQL
 */

'use strict';

var _keys2 = _interopRequireDefault(require('babel-runtime/core-js/object/keys'));

var _assign2 = _interopRequireDefault(require('babel-runtime/core-js/object/assign'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PROVIDES_MODULE = 'providesModule';

/* eslint-disable comma-dangle */

function create(options) {
  return function BabelPluginGraphQL(babel) {
    var t = babel.types;

    return {
      visitor: {
        /**
         * Extract the module name from `@providesModule`.
         */
        Program: function Program(node, state) {
          var parent = node.parent;
          if (state.file.opts.documentName) {
            return;
          }
          var documentName = void 0;
          if (parent.comments && parent.comments.length) {
            var docblock = parent.comments[0].value || '';
            var propertyRegex = /@(\S+) *(\S*)/g;
            var captures = void 0;
            while (captures = propertyRegex.exec(docblock)) {
              var property = captures[1];
              var value = captures[2];
              if (property === PROVIDES_MODULE) {
                documentName = value.replace(/[-.:]/g, '_');
                break;
              }
            }
          }
          var basename = state.file.opts.basename;
          if (basename && !documentName) {
            var _captures = basename.match(/^[_A-Za-z][_0-9A-Za-z]*/);
            if (_captures) {
              documentName = _captures[0];
            }
          }
          state.file.opts.documentName = documentName || 'UnknownFile';
        },
        TaggedTemplateExpression: function TaggedTemplateExpression(path, state) {
          if (!t.isIdentifier(path.node.tag, { name: 'graphql' })) {
            return;
          }

          require('fbjs/lib/invariant')(path.node.quasi.quasis.length === 1, 'BabelPluginGraphQL: Substitutions are not allowed in ' + 'graphql fragments. Included fragments should be referenced ' + 'as `...MyModule_propName`.');

          var text = path.node.quasi.quasis[0].value.raw;
          var ast = require('./graphql').parse(text);

          require('fbjs/lib/invariant')(ast.definitions.length === 1, 'BabelPluginGraphQL: Expected exactly one definition (fragment, ' + 'mutation, query, or subscription) per graphql tag.');
          var mainDefinition = ast.definitions[0];
          var definitionName = ast.definitions[0].name.value;
          var definitionKind = ast.definitions[0].kind;
          var fragmentID = 0;

          var fragments = {};
          var variables = {};
          var argumentDefinitions = null;
          var variableDefinitions = null;
          var usesParams = false;

          var visitors = {
            Directive: function Directive(node) {
              switch (node.name.value) {
                case 'argumentDefinitions':
                  require('fbjs/lib/invariant')(!argumentDefinitions, 'BabelPluginGraphQL: Expected only one ' + '@argumentDefinitions directive');
                  argumentDefinitions = node.arguments;
                  return null;
                case 'connection':
                  return null;
                default:
                  return node;
              }
            },
            FragmentSpread: function FragmentSpread(node) {
              var directives = node.directives;

              var fragmentName = node.name.value;
              var fragmentArgumentsAST = null;
              var substitutionName = null;

              if (directives.length === 0) {
                substitutionName = fragmentName;
              } else {
                (function () {
                  // TODO: add support for @include and other directives.
                  var directive = directives[0];
                  require('fbjs/lib/invariant')(directives.length === 1 && directive.name.value === 'arguments', 'BabelPluginGraphQL: Unsupported directive `%s` on fragment ' + 'spread `...%s`; only the @arguments directive is supported ' + 'on fragment spreads when using the graphql tag.', directive.name.value, fragmentName);
                  var fragmentArgumentsObject = {};
                  directive.arguments.forEach(function (argNode) {
                    var arg = convertArgument(t, argNode);
                    fragmentArgumentsObject[arg.name] = arg.ast;
                    if (arg.usesParams) {
                      usesParams = true;
                    }
                  });
                  fragmentArgumentsAST = createObject(t, fragmentArgumentsObject);
                  fragmentID++;
                  substitutionName = fragmentName + '_args' + fragmentID;
                })();
              }

              fragments[substitutionName] = {
                name: fragmentName,
                args: fragmentArgumentsAST
              };
              return (0, _assign2['default'])({}, node, {
                name: { kind: 'Name', value: substitutionName },
                directives: []
              });
            },
            OperationDefinition: function OperationDefinition(node) {
              variableDefinitions = node.variableDefinitions;
              return node;
            },
            Variable: function Variable(node) {
              variables[node.name.value] = null;
              return node;
            }
          };
          var legacyAST = require('./graphql').visit(mainDefinition, visitors);
          var substitutions = createSubstitutionsForFragmentSpreads(t, fragments);
          var transformedAST = void 0;

          if (definitionKind === 'FragmentDefinition') {
            var currentPath = path;
            var keyName = void 0;
            while (currentPath) {
              if (t.isObjectProperty(currentPath)) {
                keyName = currentPath.node.key.name;
                break;
              }
              currentPath = currentPath.parentPath;
            }
            require('fbjs/lib/invariant')(keyName, 'BabelPluginGraphQL: graphql`...` fragment definitions may ' + 'only appear as a property of an object literal inside a ' + 'createContainer() call.');

            var fragmentNameParts = definitionName.match(/(^\w+)_(\w+)$/);
            require('fbjs/lib/invariant')(fragmentNameParts, 'BabelPluginGraphQL: Fragment names in graphql tags have to ' + 'be named as ModuleName_propName. Got `%s`', definitionName);
            require('fbjs/lib/invariant')(fragmentNameParts[1] === state.file.opts.documentName, 'BabelPluginGraphQL: Fragment names in graphql tags have to ' + 'be named as ModuleName_propName. Got `%s`, but expected `%s`', definitionName, state.file.opts.documentName + '_' + keyName);
            require('fbjs/lib/invariant')(fragmentNameParts[2] === keyName, 'BabelPluginGraphQL: Fragment names in graphql tags have to ' + 'be named as ModuleName_propName. Got `%s`, but the prop is ' + 'named `%s`', definitionName, keyName);
            transformedAST = createObject(t, {
              kind: t.stringLiteral('FragmentDefinition'),
              argumentDefinitions: createFragmentArguments(t, argumentDefinitions, variables),
              node: createRelayQLTemplate(t, legacyAST)
            });
          } else if (definitionKind === 'OperationDefinition') {
            var operationNameParts = definitionName.match(/^(\w+)(Mutation|Query|Subscription)$/);
            require('fbjs/lib/invariant')(operationNameParts && definitionName.indexOf(state.file.opts.documentName) === 0, 'BabelPluginGraphQL: Operation names in graphql tags have ' + 'to be prefixed with `ModuleName` and end in either "Mutation", ' + '"Query", or "Subscription". Got `%s` in module `%s`.', definitionName, state.file.opts.documentName);
            var fragmentAST = createFragmentFromRoot(t, legacyAST);
            var queryASTs = splitRootFields(t, legacyAST);
            transformedAST = createObject(t, {
              kind: t.stringLiteral('OperationDefinition'),
              argumentDefinitions: createOperationArguments(t, variableDefinitions),
              fragment: fragmentAST,
              name: t.stringLiteral(definitionName),
              operation: t.stringLiteral(legacyAST.operation),
              queries: queryASTs
            });
          } else {
            require('fbjs/lib/invariant')(false, 'BabelPluginGraphQL: Expected a fragment, mutation, query, or ' + 'subscription, got `%s`.', definitionKind);
          }

          var concreteNode = {
            relay: t.functionExpression(null, usesParams ? [t.identifier('params')] : [], t.blockStatement([t.variableDeclaration('const', [t.variableDeclarator(t.identifier('RelayQL_GENERATED'), createRequireCall(t, 'RelayQL_GENERATED'))].concat(substitutions)), t.returnStatement(transformedAST)]))
          };
          if (options.relayExperimental) {
            concreteNode.relayExperimental = t.functionExpression(null, [], t.blockStatement([t.returnStatement(createRequireCall(t, definitionName + '.relay2ql'))]));
          }
          path.replaceWith(createObject(t, concreteNode));
        }
      }
    };
  };
}

function createOperationArguments(t, variableDefinitions) {
  return t.arrayExpression(variableDefinitions.map(function (definition) {
    var name = definition.variable.name.value;
    var defaultValue = definition.defaultValue ? parseValue(t, definition.defaultValue) : t.nullLiteral();
    return createLocalArgument(t, name, defaultValue);
  }));
}

function createFragmentArguments(t, argumentDefinitions, variables) {
  var concreteDefinitions = [];
  (0, _keys2['default'])(variables).forEach(function (name) {
    var definition = (argumentDefinitions || []).find(function (arg) {
      return arg.name.value === name;
    });
    if (definition) {
      var defaultValueField = definition.value.fields.find(function (field) {
        return field.name.value === 'defaultValue';
      });
      var defaultValue = defaultValueField ? parseValue(t, defaultValueField.value) : t.nullLiteral();
      concreteDefinitions.push(createLocalArgument(t, name, defaultValue));
    } else {
      concreteDefinitions.push(createRootArgument(t, name));
    }
  });
  return t.arrayExpression(concreteDefinitions);
}

function createLocalArgument(t, variableName, defaultValue) {
  return createObject(t, {
    defaultValue: defaultValue,
    kind: t.stringLiteral('LocalArgument'),
    name: t.stringLiteral(variableName)
  });
}

function createRootArgument(t, variableName) {
  return t.objectExpression([t.objectProperty(t.identifier('kind'), t.stringLiteral('RootArgument')), t.objectProperty(t.identifier('name'), t.stringLiteral(variableName))]);
}

function parseValue(t, value) {
  switch (value.kind) {
    case 'BooleanValue':
      return t.booleanLiteral(value.value);
    case 'IntValue':
      return t.numericLiteral(parseInt(value.value, 10));
    case 'FloatValue':
      return t.numericLiteral(parseFloat(value.value));
    case 'StringValue':
      return t.stringLiteral(value.value);
    case 'EnumValue':
      return t.stringLiteral(value.value);
    case 'ListValue':
      return t.arrayExpression(value.values.map(function (item) {
        return parseValue(t, item);
      }));
    default:
      require('fbjs/lib/invariant')(false, 'BabelPluginGraphQL: Unsupported literal type `%s`.', value.kind);
  }
}

function convertArgument(t, argNode) {
  var name = argNode.name.value;
  var value = argNode.value;
  var ast = null;
  var usesParams = false;
  switch (value.kind) {
    case 'Variable':
      var paramName = value.name.value;
      usesParams = true;
      ast = t.memberExpression(t.identifier('params'), t.identifier(paramName));
      break;
    default:
      ast = parseValue(t, value);
  }
  return { name: name, ast: ast, usesParams: usesParams };
}

function createObject(t, obj) {
  return t.objectExpression((0, _keys2['default'])(obj).map(function (key) {
    return t.objectProperty(t.identifier(key), obj[key]);
  }));
}

function createRequireCall(t, moduleName) {
  return t.callExpression(t.identifier('require'), [t.stringLiteral(moduleName)]);
}

function createFragmentFromRoot(t, root) {
  return createRelayQLTemplate(t, {
    kind: 'FragmentDefinition',
    loc: root.loc,
    name: {
      kind: 'Name',
      value: root.name.value + '__fragment'
    },
    typeCondition: {
      kind: 'NamedType',
      name: {
        kind: 'Name',
        value: 'Query'
      }
    },
    directives: root.directives,
    selectionSet: root.selectionSet
  });
}

function splitRootFields(t, root) {
  var properties = root.selectionSet.selections.map(function (selection) {
    require('fbjs/lib/invariant')(selection.kind === 'Field', 'BabelPluginGraphQL: Expected the root fields of operation `%s` to be ' + 'fields, got `%s`.', root.name.value, selection.kind);
    var queryProp = selection.alias ? selection.alias.value : selection.name.value;
    return t.objectProperty(t.identifier(queryProp), createRelayQLTemplate(t, (0, _assign2['default'])({}, root, {
      name: {
        kind: 'Name',
        value: root.name.value + '_' + queryProp
      },
      selectionSet: (0, _assign2['default'])({}, root.selectionSet, {
        selections: [(0, _assign2['default'])({}, selection, {
          alias: null
        })]
      })
    })));
  });
  return t.objectExpression(properties);
}

function createRelayQLTemplate(t, node) {
  var text = require('./graphql').print(node);
  return t.taggedTemplateExpression(t.identifier('RelayQL_GENERATED'), t.templateLiteral([t.templateElement({ raw: text, cooked: text }, true)], []));
}

function createSubstitutionsForFragmentSpreads(t, fragments) {
  return (0, _keys2['default'])(fragments).map(function (varName) {
    var fragment = fragments[varName];
    var match = fragment.name.match(/^(\w+)_(\w+)$/);
    require('fbjs/lib/invariant')(match, 'BabelPluginGraphQL: Fragments should be named ' + '`ModuleName_fragmentName`, got `%s`.', fragment.name);
    var module = match[1];
    var propName = match[2];
    return t.variableDeclarator(t.identifier(varName), createGetFragementCall(t, module, propName, fragment.args));
  });
}

function createGetFragementCall(t, module, propName, fragmentArguments) {
  var args = [t.stringLiteral(propName)];

  if (fragmentArguments) {
    args.push(fragmentArguments);
  }

  return t.callExpression(t.memberExpression(t.identifier(module), t.identifier('getFragment')), args);
}

module.exports = {
  create: create
};