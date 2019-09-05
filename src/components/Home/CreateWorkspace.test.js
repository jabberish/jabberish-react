import React from 'react';
import { shallow } from 'enzyme';
import CreateWorkspace from './CreateWorkspace';

describe('CreateWorkspace component', () => {
  it('renders CreateWorkspace', () => {
    const wrapper = shallow(<CreateWorkspace handleOpenDialog={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
