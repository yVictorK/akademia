module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@images': './src/assets/images',
          '@themes': './src/themes',
          '@services': './src/services',
          '@models': './src/models',
        },
      }],
    ]
  };
};