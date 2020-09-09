import { Backdrop, ListItemText, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { menuOptions } from '../../constants/menuOption';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    alignSelf: 'flex-end',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  dialog: {
    backgroundColor: 'red',
  },
  backdrop: ({ mode }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backgroundColor: mode === 'light' ? 'darkviolet' : 'blueviolet',
  }),
  actionButtons: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: '15px',
    fontFamily: 'Helvetica Neue',
    cursor: 'pointer',
  },
}));

export default ({ openMenu, toggleMenu, mode, handleTheme }) => {
  let history = useHistory();
  const classes = useStyles({ mode });
  useEffect(() => {
    if (openMenu) {
      window.onscroll = () => window.scrollTo(0, 0);
    }
    return () => (window.onscroll = () => {});
  }, [openMenu]);

  return (
    <Backdrop className={classes.backdrop} open={openMenu}>
      <div className={classes.actionButtons}>
        <Typography variant='h6' className={classes.title} color='secondary'>
          SG
        </Typography>
        <IconButton
          edge='start'
          color='inherit'
          onClick={toggleMenu}
          aria-label='close'
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <List className={classes.list}>
        {menuOptions.map((item) => (
          <ListItem
            button
            key={item.title}
            onClick={() => {
              history.push(item.link);
              toggleMenu();
            }}
          >
            <ListItemText primary={item.title} />
            {/* {item.title} */}
          </ListItem>
        ))}
      </List>
    </Backdrop>
  );
};
