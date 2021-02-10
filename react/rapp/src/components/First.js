import React from 'react'

function First(props) {
    // props are immutable
    // props.name = "Partho"
    console.log(props)
    return (
        <div>
             <h1>Hello {props.name} is {props.role}</h1>
             {props.children}
        </div>
    )
    // return React.createElement('div', {id:'hello', className:'dummyClass'}, 
    // React.createElement('h1', null, 'Hello World'))
}

export default First
