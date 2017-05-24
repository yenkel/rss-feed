import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        var date = this.state.date;
        return (

            <h2>{this.state.date.toLocaleTimeString()}</h2>

        );
    }
}



export default Clock;
