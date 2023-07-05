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
      isEditing: false,
      userBeingEdited: '',
      editedName: '',
      editedEmail: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.createUser = this.createUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.handleNameEdit = this.handleNameEdit.bind(this);
    this.handleEmailEdit = this.handleEmailEdit.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ newUsername: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ newUserEmail: event.target.value })
  }

  handleNameEdit(event) {
    this.setState({ editedName: event.target.value })
  }

  handleEmailEdit(event) {
    this.setState({ editedEmail: event.target.value })
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
    console.log(this.state.users)
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
    console.log(newUser);
    this.setState({
      newUsername: '',
      newUserEmail: ''
    })
    await this.getUsers();
  }

  deleteUser(event, id) {
    event.preventDefault();
    console.log('user id to be deleted:  ', id)
    fetch(`http://localhost:3001/users/${id}`, { method: 'DELETE' }).then(() => {
      this.getUsers();
    })
    
  }

  async updateUser() {
    const updateReq = {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({
        name: this.state.editedName,
        email: this.state.editedEmail,
      })
    }
    const response = await fetch(`http://localhost:3001/users/${this.state.userBeingEdited}`, updateReq);
    if (!response.ok) {
      throw new Error ('There was a problem updating the user')
    }

    const updateResponse = await response.json();
    console.log(updateResponse)
  }

  handleUserUpdate(event) {
    event.preventDefault();
    this.updateUser().then(() => {
      this.getUsers()
    })
    this.setState({
      isEditing: false,
      editedName: '',
      editedEmail: '',
      userBeingEdited: '',
    })
  }

  setEditing(userID, name, email) {
    this.setState({
      isEditing: true,
      userBeingEdited: userID,
      editedName: name,
      editedEmail: email
    })
  }

  cancelEdit() {
    this.setState({
      isEditing: false,
      userBeingEdited: '',
      editedName: '',
      editedEmail: ''
    })
  }
  

  render() {
    const { users, newUsername, newUserEmail, isEditing, editedName, editedEmail } = this.state;
    return (
      <div>
        <div className="add-user-container">
          <h5 className="add-user-title">Add New User</h5>
          <form className="add-user-form" onSubmit={this.createUser}>
            <label>Name:</label>
            <input type="text" value={newUsername} onChange={this.handleNameChange} />
            <label>Email:</label>
            <input type="text" value={newUserEmail} onChange={this.handleEmailChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
        {isEditing &&
          <div className="add-user-container">
            <h5 className="add-user-title">Edit User</h5>
            <div className="edit-form-items">
              <form className="add-user-form" onSubmit={this.handleUserUpdate}>
                <label>Name:</label>
                <input type="text" value={editedName} onChange={this.handleNameEdit} />
                <label>Email:</label>
                <input type="text" value={editedEmail} onChange={this.handleEmailEdit} />
                <input type="submit" value="Submit" />
              </form>
              <button className="cancel-edit-btn" onClick={this.cancelEdit}>Cancel</button>
            </div>
          </div>
        }
        {users.map((user) => {
          return (
            <div className="user-container" key={user.id}>
              <User
                name={user.name}
                email={user.email}
              />
              <div className="user-btn-container">
                <button onClick={(event) => this.deleteUser(event, user.id)}>Delete</button>
                <button onClick={() => this.setEditing(user.id, user.name, user.email)}>Edit</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Users;