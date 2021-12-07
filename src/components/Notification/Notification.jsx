import React, { Component } from 'react';

class Notification extends Component {
    static propTypes = {};
    render() {
        const { message } = this.props;
        return <p>{message}</p>;
    }
}
export default Notification;
