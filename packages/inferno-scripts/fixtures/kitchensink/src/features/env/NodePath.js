import Inferno from 'inferno';
import load from 'absoluteLoad'
import Component from 'inferno-component';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  async componentDidMount() {
    const users = load();
    this.setState({ users });
  }

  render() {
    return (
      <div id="feature-node-path">
        {this.state.users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}
