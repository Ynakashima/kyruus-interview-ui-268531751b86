import React, { Component } from 'react';
import './App.css';
import User from './User.js'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.createUser = this.createUser.bind(this);
  }

  componentDidMount() {
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
    console.log('createUser called!!!!')
    const createReq = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Olive Yorkipoo',
        email: 'olive@treats.com',
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
    const { users } = this.state;
    return (
      <div>
        <form onSubmit={this.createUser}>
          <label>ADD USER</label>
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