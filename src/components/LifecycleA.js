import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Prafull'
        }
        console.log(`LifecycleA Constructor `)
        // this.changeState = this.changeState.bind(this)
    }
    static getDerivedStateFromProps(props, state) {
        console.log(`LifecycleA getDerivedStateFromProps`)
        return null
    }

    componentDidMount() {
        console.log(`LifecycleA componentDidMount`)
    }

    shouldComponentUpdate() {
        console.log(`LifecycleA shouldComponentUpdate`);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`LifecycleA getSnapshotBeforeUpdate`);
        return null;
    }

    componentDidUpdate() {
        console.log(`LifecycleA componentDidUpdate`);
    }
    changeState = () => {
     this.setState({
         name: 'Max'
     })
    }
    render() {
        console.log(`LifecycleA render`)
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
