import { Component } from 'inferno';
import { bar } from 'unknown-package';

class App extends Component {
  componentDidMount() {
    bar();
  }
  render() {
    return <div />;
  }
}

export default App;
