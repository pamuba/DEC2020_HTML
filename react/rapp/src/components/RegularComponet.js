import React, { Component } from 'react'

class RegularComponet extends Component {
    render() {
        console.log("##############################Regular############")
        return (
            <div>
                {this.props.name}
                Regular Component
            </div>
        )
    }
}

export default RegularComponet
