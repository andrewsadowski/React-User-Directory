import React, { Component } from 'react';
import axios from 'axios';
import Person from './components/Person';
import './App.css';

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data;
        this.setState({ users });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Directory</h1>
        <Person users={this.state.users} />
      </div>
    );
  }
}

export default App;
