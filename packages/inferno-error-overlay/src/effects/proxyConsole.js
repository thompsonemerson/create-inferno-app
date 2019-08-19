/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const infernoFrameStack = [];

// This is a stripped down barebones version of this proposal:
// https://gist.github.com/sebmarkbage/bdefa100f19345229d526d0fdd22830f
// We're implementing just enough to get the invalid element type warnings
// to display the component stack in Inferno 15.6+:
// https://github.com/facebook/inferno/pull/9679
/// TODO: a more comprehensive implementation.

const registerInfernoStack = () => {
  if (typeof console !== 'undefined') {
    console.infernoStack = frames => infernoFrameStack.push(frames);
    console.infernoStackEnd = frames => infernoFrameStack.pop();
  }
};

const unregisterInfernoStack = () => {
  if (typeof console !== 'undefined') {
    console.infernoStack = undefined;
    console.infernoStackEnd = undefined;
  }
};

const permanentRegister = function proxyConsole(type, callback) {
  if (typeof console !== 'undefined') {
    const orig = console[type];
    if (typeof orig === 'function') {
      console[type] = function __stack_frame_overlay_proxy_console__() {
        try {
          const message = arguments[0];
          if (typeof message === 'string' && infernoFrameStack.length > 0) {
            callback(message, infernoFrameStack[infernoFrameStack.length - 1]);
          }
        } catch (err) {
          // Warnings must never crash. Rethrow with a clean stack.
          setTimeout(function() {
            throw err;
          });
        }
        return orig.apply(this, arguments);
      };
    }
  }
};

export { permanentRegister, registerInfernoStack, unregisterInfernoStack };
