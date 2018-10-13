/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from 'inferno';
import { black } from '../styles';

const _collapsibleStyle = {
  color: black,
  cursor: 'pointer',
  border: 'none',
  display: 'block',
  width: '100%',
  'text-align': 'left',
  background: '#fff',
  'font-family': 'Consolas, Menlo, monospace',
  'font-size': '1em',
  padding: '0px',
  'line-height': '1.5',
};

const collapsibleCollapsedStyle = {
  ..._collapsibleStyle,
  'margin-bottom': '1.5em',
};

const collapsibleExpandedStyle = {
  ..._collapsibleStyle,
  'margin-bottom': '0.6em',
};

class Collapsible extends Component {
  state = {
    collapsed: true,
  };

  toggleCollaped = () => {
    this.setState(state => ({
      collapsed: !state.collapsed,
    }));
  };

  render() {
    const count = this.props.children.length;
    const collapsed = this.state.collapsed;
    return (
      <div>
        <button
          onClick={this.toggleCollaped}
          style={
            collapsed ? collapsibleCollapsedStyle : collapsibleExpandedStyle
          }
        >
          {(collapsed ? '▶' : '▼') +
            ` ${count} stack frames were ` +
            (collapsed ? 'collapsed.' : 'expanded.')}
        </button>
        <div style={{ display: collapsed ? 'none' : 'block' }}>
          {this.props.children}
          <button
            onClick={this.toggleCollaped}
            style={collapsibleExpandedStyle}
          >
            {`▲ ${count} stack frames were expanded.`}
          </button>
        </div>
      </div>
    );
  }
}

export default Collapsible;
