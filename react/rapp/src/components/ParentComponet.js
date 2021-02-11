import React, { Component, PureComponent } from 'react'
import RegularComponet from './RegularComponet'
import PureComponents from './PureComponents'

class ParentComponet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'John'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'John'
            })
        }, 2000)
    }
    
    render() {
        console.log("##############################Parent############")
        return (
            <div>
                ParentComponent
                <RegularComponet name={this.state.name}></RegularComponet>
                <PureComponents  name={this.state.name}></PureComponents>
            </div>
        )
    }
}

export default ParentComponet
