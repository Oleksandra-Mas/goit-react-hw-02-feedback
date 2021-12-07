import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    };

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
