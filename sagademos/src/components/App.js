import './App.css';
import React, {connect} from 'react-redux' 
import { getUsersRequest} from '../actions/users'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.props.getUsersRequest();
    this.state = {
       
    }
  }
  render(){
    return (
      <div>Test</div>
    );
  }
}

export default  connect(null, {
  getUsersRequest
})(App);
