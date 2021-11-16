import React from 'react'

function Person({ person, keyName }) {
    return (
        <div>
            <h2>{keyName} Hi, I'm {person.name} I'm {person.age} years old, my skill is {person.skill}</h2>
        </div>
    )
}

export default Person
