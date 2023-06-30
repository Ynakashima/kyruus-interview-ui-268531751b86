import React, { Component } from 'react';
import './App.css';
import User from './User.js'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUsername: '',
      newUserEmail: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleNameChange(event) {
    this.setState({ newUsername: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ newUserEmail: event.target.value })
  }

  componentDidMount() {
    this.getUsers()
  }

  componentDidUpdate() {
    this.getUsers()
  }

  async getUsers() {
    const response = await fetch('http://localhost:3001/users');
    if (!response.ok) {
      throw new Error (`There was a problem fetching users: ${response}`)
    }
    const userList = await response.json();
    this.setState({ users: userList })
  }
  
  async createUser(event) {
    event.preventDefault();
    const createReq = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.newUsername,
        email: this.state.newUserEmail,
      })
    }
    const response = await fetch('http://localhost:3001/users', createReq);
    if (!response.ok) {
      throw new Error (`There was a problem creating a new user: ${response}`)
    }
    const newUser = await response.json();
    console.log('New USER:::::', newUser)
  }

  render() {
    const { users, newUsername, newUserEmail } = this.state;
    return (
      <div>
        <form onSubmit={this.createUser}>
          <label>Name:</label>
          <input type="text" value={newUsername} onChange={this.handleNameChange} />
          <label>Email:</label>
          <input type="text" value={newUserEmail} onChange={this.handleEmailChange} />
          <input type="submit" value="Submit" />
        </form>
        {users.map((user) => {
          return (
            <div>
              <User name={user.name} email={user.email} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Users;