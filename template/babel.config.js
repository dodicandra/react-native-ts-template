function getPath() {
  const sourcePath = require('./tsconfig.path.json');
  const path = sourcePath.compilerOptions.paths;

  let source = Object.keys(path).reduce((acc, item) => {
    const itemNormalize = item.replace(/\/\*/, '');
    const valuesNormalize = path[item][0].replace(/\/\*/, '');
    acc[itemNormalize] = valuesNormalize;
    return acc;
  }, {});
  return source;
}

const moduleResolver = [
  'module-resolver',
  {
    root: ['.', './src'],
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.android.ts',
      '.android.tsx',
      '.android.js',
      '.android.jsx',
      '.ios.ts',
      '.ios.tsx',
      '.ios.js',
      '.ios.jsx',
      '.json',
    ],
    alias: getPath(),
  },
];

module.exports = function (api) {
  api.cache(true);
  const plugins = [moduleResolver];

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins,
  };
};
