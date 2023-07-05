import React, { Component } from 'react';
import './App.css';

class User extends Component {
  render() {
    const { name, email } = this.props
    return (
      <div className="user-info-container">
        <div className="user-info">Name: {name}</div>
        <div className="user-info">Email: {email}</div>
      </div>
    )
  }
}

export default User;