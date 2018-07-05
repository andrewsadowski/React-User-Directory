import React, { Component } from 'react';

class Person extends Component {
  mapPerson = props => {
    return this.props.users.map(user => <li>user.name</li>);
  };

  render(props) {
    return (
      <div>
        <h1>Person1</h1>
        <p>{this.mapPerson}</p>
      </div>
    );
  }
}

export default Person;
