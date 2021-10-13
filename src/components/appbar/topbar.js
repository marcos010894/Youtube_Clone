import * as React from 'react';
import {AppBar, Box, Toolbar, Button, IconButton} from '@material-ui/core';
import { useStyle } from "../useMakeStyle";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { InputDrawer, DivInput, BtnPesquisa, DivAcountSmartPhone, DivAcountDesktop} from '../globalstyle/style';



export default function MenuAppBar() {
  const [valueDrawer, setvalueDrawer] = useState("true")


  function hendleParam(){
    if(valueDrawer == "true"){
      setvalueDrawer("false");
    }else{
      setvalueDrawer("true");
    }
  }
  const classApp = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position="static" className={classApp.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classApp.menuicon}
            aria-label="menu"
            onClick={hendleParam}
          >
          <MenuIcon  />
          </IconButton>
          
            <img src="/images/preto.png" className={classApp.logo} />
            <DivInput>
               <InputDrawer />
               <IconButton
                  edge="start"
                  className={classApp.menuicon}
                  aria-label="menu"
                  onClick={hendleParam}
                >
                <SearchIcon  />
                </IconButton>
            </DivInput>
          
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

          <DivAcountSmartPhone>
          <IconButton
            className={classApp.icons}
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <AccountCircle />
          </IconButton>
          </DivAcountSmartPhone>
         <DivAcountDesktop>
            <Button variant="outlined" color="secondary" endIcon={<AccountCircle />}>Fazer login</Button>
          </DivAcountDesktop>
        </Toolbar>
      </AppBar>

    </Box>
  );
}