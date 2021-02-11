import React, { Component } from 'react'
import UpdateComponent from './withCounter'

class ClickCounter extends Component {
    
    
    render() {
        // const { count } = this.state
        const {count, incrementCount} = this.props
        return (
            <button onClick={incrementCount}> Cliked {count} times</button>
        )
    }
}

export default UpdateComponent(ClickCounter)
