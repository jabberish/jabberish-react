import React from 'react';
import { shallow } from 'enzyme';
import WorkspaceDialog from './WorkspaceDialog';

describe('WorkspaceDialog component', () => {
  it('renders WorkspaceDialog', () => {
    const wrapper = shallow(<WorkspaceDialog 
      open={true} 
      handleCloseDialog={() => {}} 
      handleCreateWorkspace={() => {}}
      handleUpdate={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
