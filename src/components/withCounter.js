import React from "react";

const withCounter = (WrappedComponent, number) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + number }
            })
        }
        render() {
            return <WrappedComponent count={this.state.count} increment={this.incrementCount} {...this.props} />
        }
    }
    return WithCounter;
}

export default withCounter;