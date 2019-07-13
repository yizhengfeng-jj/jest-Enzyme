import React from 'react';
import PropTypes from 'prop-types';
import { List, Icon } from 'antd';

const Item = List.Item;

class ListItem extends React.Component {
    static propTypes = {
        title: '--'
    }

    render() {
        const { title, onClick, index } = this.props;

        return (
            <Item><span className="list-item-title">{title}</span> <Icon type="close" onClick={() => onClick(index)}/></Item>
        )
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

export default ListItem;