import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Projects } from '../api/projects.js';

import Project from './Project.jsx';

// App component - represents the whole app
class App extends Component {
  renderProjects() {
    return this.props.projects.map((project) => (
      <Project key={project._id} nombres={project.Nombres}/>
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Peer Grader</h1>
        </header>
        <div className='row'>
          {this.renderProjects()}
        </div>


      </div>
    );
  }
}

App.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    projects: Projects.find({}).fetch(),
  };
}, App);
