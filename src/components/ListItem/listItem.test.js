import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';

const props = {
    title: 'xixi'
}

describe('test listItem', () => {
    it('test listItem component render correct title', () => {
        const wrapper = shallow(<ListItem {...props}/>);

        expect(wrapper.find('.list-item-title').text()).toBe('xiix');
    })
})