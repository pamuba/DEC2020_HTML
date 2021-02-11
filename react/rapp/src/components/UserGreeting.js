import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>TRUE</div>       
        // }
        // else{
        //     message = <div>FALSE</div>
        // }
        // return <div>{message}</div>

        // return(
        //     this.state.isLoggedIn ? <div>TRUE</div> : <div>FALSE</div>
        // )
        return this.state.isLoggedIn && <div>TRUE</div>
    }
}

export default UserGreeting
