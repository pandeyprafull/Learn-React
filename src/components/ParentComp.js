import React, { Component, PureComponent } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Prafull'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Prafull'
            })
        }, 2000)
    }
    render() {
        console.log(`-------- Parent Componenet render -------`)
        return (
            <div>
                Parent Componenet
                <MemoComp name = {this.state.name} />
                {/* <RegComp name = {this.state.name} /> */}
                {/* <PureComp name = {this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
