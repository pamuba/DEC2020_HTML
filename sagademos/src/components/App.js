import './App.css';
import React, {connect} from 'react-redux' 
import { getUsersRequest} from '../actions/users'
import { Component } from 'react';
import UsersList from './UsersList'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.getUsersRequest();
    this.state = {
       
    }
  }
  render(){
    const users = this.props.users
    return (
      <div style={{margin:'0 auto', padding:'20px', maxWidth:'600px'}}>
        <UsersList users={users.items} />
      </div>
    );
  }
}

//state to props
export default  connect(({users}) => ({users}), {
  getUsersRequest
})(App);
