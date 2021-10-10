import React, {Component } from 'react'
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Greet />
        <Welcome />*/}
        <Hello />
      </div>
    );
  }
}

export default App;
