import React, {useContext, useCallback} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {useStyles} from './Navbar.style'
import {FireBaseAuthContext} from '../../context/AuthContext'
import firebase from '../../firebase/firebase.utils'


export default function MenuAppBar() {
  const {currentUser} = useContext(FireBaseAuthContext);
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = useCallback((event) => {
    setAuth(event.target.checked);
  }, []);

  const handleMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  },[]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[]);
  const handleSignOut = useCallback(() => {
    firebase.signOut()
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Movie Stack
          </Typography>
          {currentUser && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              > 
                {currentUser?.displayName}
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>
              
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
