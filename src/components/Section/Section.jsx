import React, { Component } from 'react';

class Section extends Component {
    static propTypes = {};

    render() {
        const { title } = this.props;
        const { children } = this.props;
        return (
            <div>
                <h2>{title}</h2>
                {children}
            </div>
        );
    }
}
export default Section;
