// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// @remove-on-eject-end
'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

process.env.NODE_ENV = 'development';

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({ silent: true });

const fs = require('fs');
const chalk = require('chalk');
const detect = require('detect-port');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('inferno-dev-utils/clearConsole');
const checkRequiredFiles = require('inferno-dev-utils/checkRequiredFiles');
const getProcessForPort = require('inferno-dev-utils/getProcessForPort');
const openBrowser = require('inferno-dev-utils/openBrowser');
const prompt = require('inferno-dev-utils/prompt');
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev');
const devServerConfig = require('../config/webpackDevServer.config');
const createWebpackCompiler = require('./utils/createWebpackCompiler');
const addWebpackMiddleware = require('./utils/addWebpackMiddleware');

const useYarn = fs.existsSync(paths.yarnLockFile);
const cli = useYarn ? 'yarn' : 'npm';
const isInteractive = process.stdout.isTTY;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;

function run(port) {
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const host = process.env.HOST || 'localhost';

  // Create a webpack compiler that is configured with custom messages.
  const compiler = createWebpackCompiler(
    config,
    function onReady(showInstructions) {
      if (!showInstructions) {
        return;
      }
      console.log();
      console.log('The app is running at:');
      console.log();
      console.log(`  ${chalk.cyan(`${protocol}://${host}:${port}/`)}`);
      console.log();
      console.log('Note that the development build is not optimized.');
      console.log(
        `To create a production build, use ${chalk.cyan(`${cli} run build`)}.`
      );
      console.log();
    }
  );

  // Serve webpack assets generated by the compiler over a web sever.
  const devServer = new WebpackDevServer(compiler, devServerConfig);

  // Our custom middleware proxies requests to /index.html or a remote API.
  addWebpackMiddleware(devServer);

  // Launch WebpackDevServer.
  devServer.listen(port, err => {
    if (err) {
      return console.log(err);
    }

    if (isInteractive) {
      clearConsole();
    }
    console.log(chalk.cyan('Starting the development server...'));
    console.log();

    openBrowser(`${protocol}://${host}:${port}/`);
  });
}

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `detect()` Promise resolves to the next free port.
detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    run(port);
    return;
  }

  if (isInteractive) {
    clearConsole();
    const existingProcess = getProcessForPort(DEFAULT_PORT);
    const question = chalk.yellow(
      `Something is already running on port ${DEFAULT_PORT}.` +
        `${existingProcess ? ` Probably:\n  ${existingProcess}` : ''}`
    ) + '\n\nWould you like to run the app on another port instead?';

    prompt(question, true).then(shouldChangePort => {
      if (shouldChangePort) {
        run(port);
      }
    });
  } else {
    console.log(
      chalk.red(`Something is already running on port ${DEFAULT_PORT}.`)
    );
  }
});
