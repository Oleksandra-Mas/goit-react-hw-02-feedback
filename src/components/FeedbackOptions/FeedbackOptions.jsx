import React, { Component } from 'react';

class Feedback extends Component {
    static propTypes = {};

    render() {
        const { options } = this.props;
        return (
            <ul>
                {options.map(mood => (
                    <button key={mood}>{mood}</button>
                ))}
            </ul>
        );
    }
}
export default Feedback;
