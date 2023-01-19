import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      increment: 0
    }
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.increment}</span>
        <button onClick={() => this.setState({ increment: this.state.increment + 1 })} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
