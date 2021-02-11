import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        
        this.cBRef = null;
        this.setCBR = (element) => {
            this.cBRef = element
        }
    }
    componentDidMount(){
        if(this.cBRef){
            this.cBRef.focus();
        }
        // this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    handler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text"  ref={this.inputRef}/>
                <input type="text"  ref={this.setCBR}/>
                <button onClick={this.handler}>Get Value</button>
            </div>
        )
    }
}

export default RefDemo
