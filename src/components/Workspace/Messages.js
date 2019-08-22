import React, { useEffect } from 'react';
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

  useEffect(() => {
    scrollToBottom();
  });
  
  const scrollToBottom = () => {
    const el = document.getElementById('scroll-bottom');
    el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container maxWidth="xl" className={classes.container}>
      <List className={classes.list}>
        {messagesData.map((messageData, i) => (
          <Message key={messageData._id} i={i} messageData={messageData} />
        ))}
        <div id="scroll-bottom" style={{ float:'left', clear: 'both' }}></div>
      </List>
    </Container>
  );
};

Messages.propTypes = {
  messagesData: PropTypes.array.isRequired
};

export default Messages;
