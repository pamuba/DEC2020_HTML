import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('data from child')}>CLICK</button>
        </div>
    )
}

export default ChildComponent
