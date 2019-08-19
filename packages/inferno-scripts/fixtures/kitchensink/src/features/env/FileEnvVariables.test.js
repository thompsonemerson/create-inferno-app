/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import FileEnvVariables from './FileEnvVariables';

describe('.env variables', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<FileEnvVariables />, div);
  });
});
