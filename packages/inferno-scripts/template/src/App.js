import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80"/>
          <h2>Welcome to Inferno</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <svg viewBox="0 0 100 100" className={""}><use xlink:href="icons/sprite.svg#websocket"></use></svg>
        </p>
      </div>
    );
  }
}

export default App;
