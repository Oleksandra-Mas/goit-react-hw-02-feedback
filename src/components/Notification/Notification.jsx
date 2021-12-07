import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
    };
    render() {
        const { message } = this.props;
        return <p>{message}</p>;
    }
}
export default Notification;
