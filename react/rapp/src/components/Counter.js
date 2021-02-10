import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)
        this.setState(
            {
                count: this.state.count + 1
            },
            ()=>{
                console.log("Callback:", this.state.count)
            }
        )
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
