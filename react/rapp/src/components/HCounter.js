import React, { Component } from 'react'

export class HCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count:prevState.count + 1}
    //     }, ()=> console.log(this.state.count))
    // }
    render() {
        return (
            <div>
             <h2 onMouseOver={this.incrementCount}>Hovered {this.state.count} times</h2>
            </div>
        )
    }
}

export default HCounter
