import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    };

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <div className={styles.stats}>
                <p className={styles.item}>Good: {good}</p>
                <p className={styles.item}>Neutral: {neutral}</p>
                <p className={styles.item}>Bad: {bad}</p>
                <p className={styles.item}>Total: {total}</p>
                <p className={styles.item}>
                    Positive feedback: {positivePercentage + '%'}
                </p>
            </div>
        );
    }
}
export default Statistics;
