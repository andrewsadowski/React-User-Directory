import React, { Component } from 'react';

class Person extends Component {
  render(props) {
    const { email, name } = this.props.details;
    return (
      <div className="personInfo-container">
        <p className="person-name">{name}</p>
        <p className="person-email">{email}</p>
      </div>
    );
  }
}

export default Person;
