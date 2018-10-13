/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from 'inferno';
import { black } from '../styles';

const overlayStyle = {
  position: 'relative',
  display: 'inline-flex',
  'flex-direction': 'column',
  height: '100%',
  width: '1024px',
  'max-width': '100%',
  'overflow-x': 'hidden',
  'overflow-y': 'auto',
  padding: '0.5rem',
  'box-sizing': 'border-box',
  'text-align': 'left',
  'font-family': 'Consolas, Menlo, monospace',
  'font-size': '11px',
  'white-space': 'pre-wrap',
  'word-break': 'break-word',
  'line-height': 1.5,
  color: black,
};

class ErrorOverlay extends Component {
  iframeWindow = null;

  getIframeWindow = element => {
    if (element) {
      const document = element.ownerDocument;
      this.iframeWindow = document.defaultView;
    }
  };

  onKeyDown = e => {
    const { shortcutHandler } = this.props;
    if (shortcutHandler) {
      shortcutHandler(e.key);
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
    if (this.iframeWindow) {
      this.iframeWindow.addEventListener('keydown', this.onKeyDown);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
    if (this.iframeWindow) {
      this.iframeWindow.removeEventListener('keydown', this.onKeyDown);
    }
  }

  render() {
    return (
      <div style={overlayStyle} ref={this.getIframeWindow}>
        {this.props.children}
      </div>
    );
  }
}

export default ErrorOverlay;
