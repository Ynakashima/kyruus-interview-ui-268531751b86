import React, { Component } from 'react';
import './App.css';
import User from './User.js'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
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
    console.log(userList);
    this.setState({ users: userList })
    console.log('users from state', this.state.users)
  }

  render() {
    const { users } = this.state;
    return (
      <div>
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