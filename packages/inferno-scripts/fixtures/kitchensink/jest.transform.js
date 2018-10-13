const babelOptions = { presets: ['babel-preset-inferno-app'] };

module.exports = require('babel-jest').createTransformer(babelOptions);
