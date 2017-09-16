import React, { Component } from 'react';
import Alphabet from './components/Alphabet';

class App extends Component {
  render() {
    return (
      <div className="container">
        <svg width="800" height="200">
          <Alphabet x="32" y="100" />
        </svg>
      </div>
    );
  }
}

export default App;
