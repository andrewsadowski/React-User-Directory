import React, { Component } from 'react';

class Person extends Component {
  mapPerson = props => {
    return this.props.users.map(user => {
      <React.Fragment>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </React.Fragment>;
    });
  };

  render(props) {
    return (
      <div>
        <h1>Person1</h1>
        {this.mapPerson}
      </div>
    );
  }
}

export default Person;
