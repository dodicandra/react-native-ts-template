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
      '.ios.js',
      '.ios.jsx',
      '.android.js',
      '.android.jsx',
      '.js',
      '.ts',
      '.tsx',
      '.jsx',
      '.android.ts',
      '.android.tsx',
      'android.jsx',
      '.ios.ts',
      '.ios.tsx',
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
    presets: ['babel-preset-expo'],
    plugins,
  };
};
