const fs = require('fs');
const generate = require('react-native/local-cli/generate/generate.js');

generate([
  '--platform', 'android',
  '--project-path', process.cwd(),
  '--project-name', JSON.parse(
    fs.readFileSync('package.json', 'utf8')
  ).name,
]);
