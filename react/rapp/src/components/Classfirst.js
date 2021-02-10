import React, { Component } from 'react'

class Classfirst extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello World"
        }
    }
    
    render() {
        return (
            <div>
               <h1>Hello {this.props.name} is {this.props.role}</h1>
                {this.props.children}
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Classfirst
