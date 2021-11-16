import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log(`Function Event Clicked !!!!`)
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
