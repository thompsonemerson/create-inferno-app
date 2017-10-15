/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Component from 'inferno-component';

function load(name) {
  return [
    { id: 1, name: `${name}1` },
    { id: 2, name: `${name}2` },
    { id: 3, name: `${name}3` },
    { id: 4, name: `${name}4` },
  ];
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  async componentDidMount() {
    const users = load('user_');
    this.setState({ users });
  }

  componentDidUpdate() {
    this.props.onReady();
  }

  render() {
    return (
      <div id="feature-template-interpolation">
        {this.state.users.map(user => <div key={user.id}>{user.name}</div>)}
      </div>
    );
  }
}
