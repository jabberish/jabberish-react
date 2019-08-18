import React from 'react';
import PropTypes from 'prop-types';

import styles from './ChannelList.css';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));


const ChannelList = ({ channels, selectChannel }) => {
  
  const classes = useStyles();
  
  return (
    <Drawer variant="permanent" className={styles.ChannelList}>
      <div className={classes.toolbar} />

      Channels
      <List>
        {channels.map(channel => (
          <ListItem 
            button 
            key={channel._id}
            onClick={() => selectChannel(channel)}
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
