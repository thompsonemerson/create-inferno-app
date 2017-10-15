/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Component from 'inferno-component';
import load from 'absoluteLoad';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  async componentDidMount() {
    const users = load();
    this.setState({ users });
  }

  componentDidUpdate() {
    this.props.onReady();
  }

  render() {
    return (
      <div id="feature-node-path">
        {this.state.users.map(user => <div key={user.id}>{user.name}</div>)}
      </div>
    );
  }
}
