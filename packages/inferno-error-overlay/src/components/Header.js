/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { red } from '../styles';

const headerStyle = {
  'font-size': '2em',
  'font-family': 'sans-serif',
  color: red,
  'white-space': 'pre-wrap',
  // Top bottom margin spaces header
  // Right margin revents overlap with close button
  margin: '0 2rem 0.75rem 0',
  flex: '0 0 auto',
  'max-height': '50%',
  overflow: 'auto',
};

function Header(props) {
  return <div style={headerStyle}>{props.headerText}</div>;
}

export default Header;
