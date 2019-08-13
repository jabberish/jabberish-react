import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

describe('Register component', () => {
  it('renders Register', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
