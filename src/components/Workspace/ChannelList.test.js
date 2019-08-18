import React from 'react';
import { shallow } from 'enzyme';
import ChannelList from './ChannelList';

describe('ChannelList component', () => {
  it('renders ChannelList', () => {
    const channels = [];
    // eslint-disable-next-line no-console
    const selectChannel = () => console.log('function');
    const wrapper = shallow(<ChannelList channels={channels} selectChannel={selectChannel} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
