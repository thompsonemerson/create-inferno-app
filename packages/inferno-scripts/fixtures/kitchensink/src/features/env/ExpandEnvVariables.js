/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default () => (
  <span>
    <span id="feature-expand-env-1">{process.env.INFERNO_APP_BASIC}</span>
    <span id="feature-expand-env-2">
      {process.env.INFERNO_APP_BASIC_EXPAND}
    </span>
    <span id="feature-expand-env-3">
      {process.env.INFERNO_APP_BASIC_EXPAND_SIMPLE}
    </span>
    <span id="feature-expand-env-existing">
      {process.env.INFERNO_APP_EXPAND_EXISTING}
    </span>
  </span>
);
