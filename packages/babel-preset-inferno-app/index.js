/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

var path = require('path');

const plugins = [
  // Transforms JSX
  [
    require.resolve('babel-plugin-inferno'),
    {
      imports: true,
    },
  ],
  // class { handleClick = () => { } }
  require.resolve('babel-plugin-transform-class-properties'),
  // The following two plugins use Object.assign directly, instead of Babel's
  // extends helper. Note that this assumes `Object.assign` is available.
  // { ...todo, completed: true }
  [
    require.resolve('babel-plugin-transform-object-rest-spread'),
    {
      useBuiltIns: true,
    },
  ],
  // Polyfills the runtime needed for async/await and generators
  [
    require.resolve('babel-plugin-transform-runtime'),
    {
      helpers: false,
      polyfill: false,
      regenerator: true,
      // Resolve the Babel runtime relative to the config.
      moduleName: path.dirname(require.resolve('babel-runtime/package')),
    },
  ],
];

// This is similar to how `env` works in Babel:
// https://babeljs.io/docs/usage/babelrc/#env-option
// We are not using `env` because it’s ignored in versions > babel-core@6.10.4:
// https://github.com/babel/babel/issues/4539
// https://github.com/facebookincubator/create-inferno-app/issues/720
// It’s also nice that we can enforce `NODE_ENV` being specified.
var env = process.env.BABEL_ENV || process.env.NODE_ENV;
if (env !== 'development' && env !== 'test' && env !== 'production') {
  throw new Error(
    'Using `babel-preset-inferno-app` requires that you specify `NODE_ENV` or ' +
      '`BABEL_ENV` environment variables. Valid values are "development", ' +
      '"test", and "production". Instead, received: ' +
      JSON.stringify(env) +
      '.'
  );
}

// if (env === 'development' || env === 'test') {
//   plugins.push.apply(plugins, [
//     // Adds component stack to warning messages
//     require.resolve('babel-plugin-transform-inferno-jsx-source'),
//     // Adds __self attribute to JSX which Inferno will use for some warnings
//     require.resolve('babel-plugin-transform-inferno-jsx-self')
//   ]);
// }

if (env === 'test') {
  module.exports = {
    presets: [
      // ES features necessary for user's Node version
      [
        require('babel-preset-env').default,
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins: plugins.concat([
      // Compiles import() to a deferred require()
      require.resolve('babel-plugin-dynamic-import-node'),
    ]),
  };
} else {
  module.exports = {
    presets: [
      // Latest stable ECMAScript features
      [
        require.resolve('babel-preset-env'),
        {
          targets: {
            // Inferno parses on ie 9, so we should too
            ie: 11,
            // We currently minify with uglify
            // Remove after https://github.com/mishoo/UglifyJS2/issues/448
            uglify: true,
          },
          modules: false, // Let webpack 2 treeshake
          // Disable polyfill transforms
          useBuiltIns: false,
          // Do not transform modules to CJS
          modules: false,
        },
      ],
    ],
    plugins: plugins.concat([
      // function* () { yield 42; yield 43; }
      [
        require.resolve('babel-plugin-transform-regenerator'),
        {
          // Async functions are converted to generators by babel-preset-env
          async: false,
        },
      ],
      // Adds syntax support for import()
      require.resolve('babel-plugin-syntax-dynamic-import'),
    ]),
  };

  if (env === 'production') {
    // Optimization: hoist JSX that never changes out of render()
    // Disabled because of issues:
    // * https://github.com/facebookincubator/create-inferno-app/issues/525
    // * https://phabricator.babeljs.io/search/query/pCNlnC2xzwzx/
    // * https://github.com/babel/babel/issues/4516
    // TODO: Enable again when these issues are resolved.
    // plugins.push.apply(plugins, [
    //   require.resolve('babel-plugin-transform-inferno-constant-elements')
    // ]);
  }
}
