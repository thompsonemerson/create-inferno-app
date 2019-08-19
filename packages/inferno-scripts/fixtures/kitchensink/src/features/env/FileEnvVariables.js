/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Inferno from 'inferno';

export default () => (
  <span>
    <span id="feature-file-env-original-1">
      {process.env.INFERNO_APP_ORIGINAL_1}
    </span>
    <span id="feature-file-env-original-2">
      {process.env.INFERNO_APP_ORIGINAL_2}
    </span>
    <span id="feature-file-env">
      {process.env.INFERNO_APP_DEVELOPMENT}
      {process.env.INFERNO_APP_PRODUCTION}
    </span>
    <span id="feature-file-env-x">{process.env.INFERNO_APP_X}</span>
  </span>
);
