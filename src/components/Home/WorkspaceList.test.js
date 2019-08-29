import React from 'react';
import { shallow } from 'enzyme';
import WorkspaceList from './WorkspaceList';

describe('WorkspaceList component', () => {
  it('renders WorkspaceList', () => {
    const wrapper = shallow(<WorkspaceList 
      workspaces={[]} 
      setCurrentWorkspace={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
