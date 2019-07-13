import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
    static propTypes = {
        title: '--'
    }

    render() {
        const { title } = this.props;

        return (
            <h1>{title}</h1>
        )
    }
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title;