import React, { Component } from 'react'
import { LifeCycleB } from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"john"
        }
        console.log("LifeCycleA constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log(" LifeCycleA getDerivedStateFromProps")
        return null
    }
    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <div>LifeCycleA</div>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }
}

export default LifeCycleA
