import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return <h1> Welocome {this.props.name} a.k.a {this.props.originalName}</h1>
    }
}

export default Welcome