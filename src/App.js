import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Person from './components/Person';
import './App.css';

class App extends React.Component {
  state = {
    users: {}
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data;
        console.log(res);
        this.setState({ users });
      });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>Persons</h1>
        <ul>{this.state.users.map(user => <li>{user.name}</li>)}</ul>
        <Person users={this.state.users} />
      </div>
    );
  }
}

export default App;
