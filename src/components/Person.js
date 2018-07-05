import React, { Component } from 'react';

class Person extends Component {
  mapPerson = () => {
    return this.props.users.map((user, i) => {
      <div>
        <p key={i}>{user[i].name}</p>
        <p key={i}>{user[i].email}</p>
      </div>;
    });
  };

  render(props) {
    const { email, name } = this.props.details;
    return (
      <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
      </div>
    );
  }
}

export default Person;
