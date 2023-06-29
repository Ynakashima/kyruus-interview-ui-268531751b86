import React, { Component } from 'react';
import './App.css';

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email } = this.props
    return (
      <div className="user-container">
        <div>{name}</div>
        <div>{email}</div>
      </div>
    )
  }
}

export default User;