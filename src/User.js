import React, { Component } from 'react';
import './App.css';

class User extends Component {
  // deleteUser = () => {
  //   this.props.deleteUser
  // }

  render() {
    const { name, email } = this.props
    return (
      <div className="user-container">
        <div className="user-info">{name}</div>
        <div className="user-info">{email}</div>
      </div>
    )
  }
}

export default User;