import * as React from 'react';
import {AppBar, Box, Toolbar, Button, IconButton} from '@material-ui/core';
import { useStyle } from "../useMakeStyle";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import  DrawerYt  from '../drawer';


export default function MenuAppBar() {
  const classApp = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position="static" className={classApp.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classApp.menuicon}
            aria-label="menu"
          >
          <MenuIcon />
          </IconButton>
          
            <img src="/images/preto.png" className={classApp.logo} />
          
          <div className={classApp.grow} />

          <IconButton
            className={classApp.icons}
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
          >
          <VideoCall />
          </IconButton>

          <IconButton
            className={classApp.icons}
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
          >
          <AppsIcon />
          </IconButton>

          <IconButton
            className={classApp.icons}
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
          >
          <MoreVertIcon />
          </IconButton>
         
          <Button variant="outlined" color="secondary" endIcon={<AccountCircle />}>Fazer login</Button>
        </Toolbar>
      </AppBar>
      <DrawerYt></DrawerYt>
    </Box>
  );
}