import React, { Component } from "react";

export default class CounterClassBased extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: this.props.initCount
        }
    }
    changeCount(value) {
        //changing count state
        this.setState({
            count: this.state.count + value
        })


    }

    render() {
        return (
            <>

                <div>
                    <button onClick={() => this.changeCount(-1)}>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={() => this.changeCount(1)}>+</button>
                </div>
            </>

        )
    }

};