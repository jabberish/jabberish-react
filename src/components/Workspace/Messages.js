import React from 'react';
import PropTypes from 'prop-types';
import { List, Paper, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: theme.mixins.toolbar,
}));

const Messages = ({ messagesData }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List>
        {messagesData.map(messageData => (
          <React.Fragment key={messageData._id}>
            <ListItem>
              <Typography variant="body1">{messageData.text}</Typography>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
      <div className={classes.toolbar} />
    </Paper>
  );
};

Messages.propTypes = {
  messagesData: PropTypes.array.isRequired
};

export default Messages;