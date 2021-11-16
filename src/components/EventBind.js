import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello buddy'
        }

        this.changeMessage = this.changeMessage.bind(this)
    }
    changeMessage() {
        this.setState({
            message: `Hello Devil Get Back to you Soon`
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.changeMessage}>Change Name</button>
            </div>
        )
    }
}

export default EventBind
