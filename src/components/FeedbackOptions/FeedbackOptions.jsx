import React, { Component } from 'react';

class FeedbackOptions extends Component {
    static propTypes = {};

    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ul>
                {options.map(mood => (
                    <li key={mood}>
                        <button onClick={() => onLeaveFeedback(mood)}>
                            {mood}{' '}
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}
export default FeedbackOptions;
