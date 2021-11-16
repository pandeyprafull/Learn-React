import React from 'react';

// function Greet() {
//     return <h1> Hello Max </h1>
// }
const Greet = (props) => {
    const { name, originalName } = props
    return (
        <div>
            <h1> Hello {name} a.k.a {originalName}</h1>
        </div>
    )
}

export default Greet