/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import Chat from './Chat';

describe('Chat component', () => {
  it('renders Chat', () => {
    const messagesData = [];
    const onSubmitMessage = () => console.log('');
    const onUpdateMessageInput = () => console.log('');
    const messageInput = '';
    const wrapper = shallow(<Chat 
      messagesData={messagesData} 
      onSubmitMessage={onSubmitMessage} 
      onUpdateMessageInput={onUpdateMessageInput}
      messageInput={messageInput} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
