import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
    render() {
        console.log(" ----->",this.props)
        const { count, increment } = this.props
        return (
            <div>
                <h1 onMouseOver={increment}> {this.props.name} Hovered {count} times</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)
