import React, { Component } from 'react';

import Project from './Project.jsx';

// App component - represents the whole app
export default class App extends Component {


  render() {
    return (
      <div className="container">
        <header>
          <h1>Peer Grader</h1>
        </header>
        <h1>hjola</h1>

        <Project></Project>
      </div>
    );
  }
}
