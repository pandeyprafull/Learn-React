import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: `Parent`
        }
        this.greetHandler = this.greetHandler.bind(this)
    }

    greetHandler() {
        alert(`Hello ${this.state.parentName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetHandler} />
            </div>
        )
    }
}

export default Parent
