import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  users = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' }
  ];

  render() {
    return (
      <div id="feature-class-properties">
        {this.users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}
