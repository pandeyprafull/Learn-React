import React, { useState } from 'react'
import UpdatedComponent from './withCounter'

function HoverCounterFunctional() {
    const [count, incrementCount] = useState(0)
    return (
        <div>
            <h1 onMouseOver={() => incrementCount(count + 1)}>You Hovered Functional {count}</h1>
        </div>
    )
}

export default UpdatedComponent(HoverCounterFunctional)
