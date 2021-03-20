import React, {useContext, useCallback} from 'react';
import {useHistory} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
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
  const history = useHistory()

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

  const handleHomePage = () => {
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleHomePage} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon  />
          </IconButton>
          <Typography  variant="h6" className={classes.title} onClick={handleHomePage} >
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
