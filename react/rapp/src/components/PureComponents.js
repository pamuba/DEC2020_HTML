import React, { PureComponent } from 'react'

class PureComponents extends PureComponent {
    render() {
        console.log("##############################Pure############")
        return (
            <div>
                {this.props.name}
                Pure Component
            </div>
        )
    }
}

export default PureComponents
