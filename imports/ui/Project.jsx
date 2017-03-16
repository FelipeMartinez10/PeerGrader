import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Project extends Component {
  render() {
    return (
      <div className='row projects'>
        <h3>Nombre:</h3>
        <h4>{this.props.nombres}</h4>
      </div>
    );
  }
}

//Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
//  task: PropTypes.object.isRequired,
//};
