import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

import { List, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  paper: {
    overflowY: 'scroll',
    height: '100%'
  },
  list: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  toolbar: theme.mixins.toolbar,
}));

const Messages = ({ messagesData }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        {messagesData.map((messageData, i) => (
          <Message key={messageData._id} i={i} messageData={messageData} />
        ))}
      </List>
    </Paper>
  );
};

Messages.propTypes = {
  messagesData: PropTypes.array.isRequired
};

export default Messages;
