import React from 'react';
import { shallow } from 'enzyme';
import RegisterForm from './RegisterForm';

describe('RegisterForm component', () => {
  it('renders RegisterForm', () => {
    const wrapper = shallow(<RegisterForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
