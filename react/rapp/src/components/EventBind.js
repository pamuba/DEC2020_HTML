import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:"GoodBye"
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler}>BUTTON</button> */}
                {/* every rerender --- new binding */}
                {/* <button onClick={this.clickHandler.bind(this)}>BUTTON</button> */}
                {/* Performance issues */}
                {/* <button onClick={()=>this.clickHandler()}>BUTTON</button> */}

                {/* Recommended */}
                <button onClick={this.clickHandler}>BUTTON</button>
            </div>
        )
    }
}

export default EventBind
