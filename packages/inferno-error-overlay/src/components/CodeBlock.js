/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { redTransparent, yellowTransparent } from '../styles';

const _preStyle = {
  position: 'relative',
  display: 'block',
  padding: '0.5em',
  'margin-top': '0.5em',
  'margin-bottom': '0.5em',
  'overflow-x': 'auto',
  'white-space': 'pre-wrap',
  'border-radius': '0.25rem',
};

const primaryPreStyle = {
  ..._preStyle,
  'background-color': redTransparent,
};

const secondaryPreStyle = {
  ..._preStyle,
  'background-color': yellowTransparent,
};

const codeStyle = {
  'font-family': 'Consolas, Menlo, monospace',
};

function CodeBlock(props) {
  const preStyle = props.main ? primaryPreStyle : secondaryPreStyle;
  const codeBlock = { __html: props.codeHTML };

  return (
    <pre style={preStyle}>
      <code style={codeStyle} dangerouslySetInnerHTML={codeBlock} />
    </pre>
  );
}

export default CodeBlock;
