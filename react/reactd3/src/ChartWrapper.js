import React, { Component } from 'react'
import D3Chart from './D3Chart'

class ChartWrapper extends Component {
    constructor(props) {
        super(props)
        this.chart = React.createRef()
    }

    componentDidMount(){
        new D3Chart(this.chart.current)
    }
    
    render() {
        return (
            <div ref={this.chart}>               
            </div>
        )
    }
}

export default ChartWrapper
