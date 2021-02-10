import React, { Component } from 'react'

class StateDemo1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
    }
    changeMessage(){
        this.setState({
            message:"Hiiiii!"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>CLICK</button>
            </div>
        )
    }
}

export default StateDemo1
