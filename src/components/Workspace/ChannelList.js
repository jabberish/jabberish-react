import React from 'react';
import PropTypes from 'prop-types';

import { Drawer, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: '220px'
  },
  drawerPaper: {
    width: '220px'
  },
  toolbar: theme.mixins.toolbar,
}));


const ChannelList = ({ channels, selectChannel }) => {
  
  const classes = useStyles();
  
  return (
    <Drawer 
      variant="permanent" 
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />

      <Typography variant="h6">Channels</Typography>
      <List>
        {channels.map(channel => (
          <ListItem 
            button 
            key={channel._id}
            onClick={() => selectChannel(channel._id)}
          >
            <ListItemText primary={channel.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  selectChannel: PropTypes.func.isRequired
};

export default ChannelList;
