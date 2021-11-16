import React, { Component } from 'react';
import Person from './Person';

class NameList extends Component {
    render() {
        const personList = [
            {
                id: 1,
                name: `Prafull`,
                age: 21,
                skill: `React`
            },
            {
                id: 2,
                name: `Dev`,
                age: 22,
                skill: `Angular`
            },
            {
                id: 3,
                name: `Max`,
                age: 23,
                skill: `Vue`
            },

        ]
        const names = ['Bruce', 'Dani', 'Bred']
        const persons = names.map((person, index) => <h2 key={index}> {index} {person}</h2>)

        return (
            <div>{persons}</div>
        )
    }
}

export default NameList
