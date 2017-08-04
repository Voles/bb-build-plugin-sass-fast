const path = require('path');

module.exports = (config) => {
  config.module.loaders.push({
    test: /\.(scss|sass)$/,
    loaders: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  });

  config.resolveLoader.modulesDirectories.push(path.join(__dirname, 'node_modules'));

  return config;
};
