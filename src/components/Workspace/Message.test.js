/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message component', () => {
  it('renders Message', () => {
    const wrapper = shallow(<Message 
      i={1} 
      messageData={{ _id: 'some-id', text: 'text', user: {} }} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
