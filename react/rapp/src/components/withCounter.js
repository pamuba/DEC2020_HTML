import React from 'react'

const UpdateComponent = (OriginalComponent) => {
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount = () => {
            // console.log("Clicked")
            this.setState(prevState => {
                return {count:prevState.count + 1}
            }, ()=> console.log(this.state.count))
        }
        render(){
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} name="John"></OriginalComponent>
        }
    }
    return NewComponent
}

export default UpdateComponent