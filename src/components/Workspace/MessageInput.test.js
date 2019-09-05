/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import MessageInput from './MessageInput';

describe('MessageInput component', () => {
  it('renders MessageInput', () => {
    const wrapper = shallow(<MessageInput 
      onSubmitMessage={() => {}} 
      onUpdateMessageInput={() => {}} 
      messageInput='input'
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
