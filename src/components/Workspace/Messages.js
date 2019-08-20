import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

import { List, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
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
    <Container maxWidth="lx" className={classes.container}>
      <List className={classes.list}>
        {messagesData.map((messageData, i) => (
          <Message key={messageData._id} i={i} messageData={messageData} />
        ))}
      </List>
    </Container>
  );
};

Messages.propTypes = {
  messagesData: PropTypes.array.isRequired
};

export default Messages;
