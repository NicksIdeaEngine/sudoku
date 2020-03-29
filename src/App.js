import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      test: 'up and running',
    };
  }

  render() {
    const { test } = this.state;
    return (
      <div className="page">
        <h1>This Is Header One</h1>
        <p>{test}</p>
      </div>
    );
  }
}

export default App;
