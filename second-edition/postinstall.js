const fs = require('fs');
const path = require('path');

const examples = [
  ['Chapter02', 'builtin-html-tags'],
  ['Chapter02', 'describing-ui-structures'],
  ['Chapter02', 'dynamic-property-values-and-text'],
  ['Chapter02', 'encapsulating-html'],
  ['Chapter02', 'hello-jsx'],
  ['Chapter02', 'html-tag-conventions'],
  ['Chapter02', 'jsx-fragments'],
  ['Chapter02', 'mapping-collections-to-elements'],
  ['Chapter02', 'namespaced-components'],
  ['Chapter02', 'nested-elements'],

  ['Chapter03', 'container-components'],
  ['Chapter03', 'default-property-values'],
  ['Chapter03', 'defaults-in-functional-components'],
  ['Chapter03', 'initial-component-state'],
  ['Chapter03', 'merging-component-state'],
  ['Chapter03', 'producing-and-consuming-context'],
  ['Chapter03', 'pure-functional-components'],
  ['Chapter03', 'setting-component-state'],
  ['Chapter03', 'setting-property-values'],

  ['Chapter04', 'declaring-handler-functions'],
  ['Chapter04', 'event-pooling'],
  ['Chapter04', 'getting-component-data'],
  ['Chapter04', 'higher-order-event-handlers'],
  ['Chapter04', 'importing-generic-handlers'],
  ['Chapter04', 'inline-event-handlers'],
  ['Chapter04', 'multiple-event-handlers'],

  ['Chapter05', 'add-article-component'],
  ['Chapter05', 'article-item-component'],
  ['Chapter05', 'article-list-component'],
  ['Chapter05', 'functional-components'],
  ['Chapter05', 'monolithic-components'],
  ['Chapter05', 'render-props'],

  ['Chapter06', 'cleaning-up-asynchronous-calls'],
  ['Chapter06', 'error-boundaries'],
  ['Chapter06', 'fetching-component-data'],
  ['Chapter06', 'initializing-state-with-properties'],
  ['Chapter06', 'rendering-jquery-ui-widgets'],
  ['Chapter06', 'should-render'],
  ['Chapter06', 'updating-state-with-properties'],
  ['Chapter06', 'using-meta-data'],

  ['Chapter07', 'any-property-value'],
  ['Chapter07', 'basic-type-validation'],
  ['Chapter07', 'custom-validator-functions'],
  ['Chapter07', 'requiring-specific-types'],
  ['Chapter07', 'requiring-specific-values'],
  ['Chapter07', 'requiring-values'],
  ['Chapter07', 'things-that-can-be-rendered'],

  ['Chapter08', 'conditional-component-rendering'],
  ['Chapter08', 'inheriting-jsx-and-event-handlers'],
  ['Chapter08', 'inheriting-properties'],
  ['Chapter08', 'inheriting-state'],
  ['Chapter08', 'providing-data-sources'],

  ['Chapter09', 'basic-linking'],
  ['Chapter09', 'decoupling-route-declarations'],
  ['Chapter09', 'hello-route'],
  ['Chapter09', 'optional-parameters'],
  ['Chapter09', 'parent-and-child-routes'],
  ['Chapter09', 'resource-ids-in-routes'],
  ['Chapter09', 'url-and-query-parameters'],

  ['Chapter10', 'backend-routing'],
  ['Chapter10', 'next-js-fetching-data'],
  ['Chapter10', 'frontend-reconciliation'],
  ['Chapter10', 'rendering-to-strings'],

  ['Chapter11', 'react-bootstrap']
];

const copyPackage = dir =>
  new Promise((resolve, reject) => {
    fs.copyFile(
      path.join(__dirname, 'package.json'),
      path.join(dir, 'package.json'),
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });

const linkPublic = dir =>
  new Promise((resolve, reject) => {
    if (fs.existsSync(path.join(dir, 'public'))) {
      resolve();
      return;
    }

    fs.symlink(
      path.join(__dirname, 'public'),
      path.join(dir, 'public'),
      'dir',
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });

const linkModules = dir =>
  new Promise((resolve, reject) => {
    if (fs.existsSync(path.join(dir, 'node_modules'))) {
      resolve();
      return;
    }

    fs.symlink(
      path.join(__dirname, 'node_modules'),
      path.join(dir, 'node_modules'),
      'dir',
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });

Promise.all(
  examples
    .map(paths => path.join(__dirname, ...paths))
    .map(dir =>
      Promise.all([
        copyPackage(dir),
        linkPublic(dir),
        linkModules(dir)
      ])
    )
).catch(err => console.error(err));
