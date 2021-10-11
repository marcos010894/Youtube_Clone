import {Drawer, Button, Box,  Toolbar, Typography, List, ListItem, ListItemIcon, Divider, ListItemText} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { useStyle } from "../useMakeStyle";
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircle from '@material-ui/icons/AddCircle';





export default function DrawerYt() {
    const classDrawer = useStyle();
return(
    <Drawer
    className={classDrawer.drawer}
    variant='permanent'
    classes={{
      paper: classDrawer.drawerPaper,
    }}
    >
    <Toolbar />
    <List>        
        <ListItem button key={"Inicio"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"inicio"} />
        </ListItem>
    </List>

    <List>        
        <ListItem button key={"Em alta"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <Whatshot />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"Em alta"} />
        </ListItem>
    </List>

    <List>        
        <ListItem button key={"incriçoes"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <Subscriptions />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"incriçoes"} />
        </ListItem>
    </List>

    <Divider />
    <List>        
        <ListItem button key={"Inicio"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"inicio"} />
        </ListItem>
    </List>
    <List>        
        <ListItem button key={"Inicio"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"inicio"} />
        </ListItem>
    </List>
    <Divider />
    <List>        
        <ListItem button key={"Inicio"}
        classes={{
            root: classDrawer.listItem
        }}>
         <p className={classDrawer.textpadding}> Faça login para curtur vídeos, comentar e se inscrever. </p>
        </ListItem>
    </List>
    <div className={classDrawer.textCenter}>
        <Button
        className={classDrawer.widthBrn}
        variant='outlined'
        color='secondary'
        startIcon={<AccountCircle />}
        >
        Fazer login
        </Button>
    </div>
    <Divider/>
    <List>        
        <ListItem button key={"Inicio"}
        classes={{
            root: classDrawer.listItem
        }}>
         <p className={classDrawer.textTitle}> O Melhor do youtube. </p>
        </ListItem>
    </List>
    <List>        
        <ListItem button key={"Musica"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <AddCircle />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"Musica"} />
        </ListItem>
    </List>

    <List>        
        <ListItem button key={"Esportes"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <AddCircle />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"Esportes"} />
        </ListItem>
    </List>

    <List>        
        <ListItem button key={"Jogos"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <AddCircle />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"Jogos"} />
        </ListItem>
    </List>
    <List>        
        <ListItem button key={"Entreterimento"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <AddCircle />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"Entreterimento"} />
        </ListItem>
    </List>
    <List>        
        <ListItem button key={"Comédia"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <AddCircle />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"Comédia"} />
        </ListItem>
    </List>
    <List>        
        <ListItem button key={"Familia"}
        classes={{
            root: classDrawer.listItem
        }}>
            <ListItemIcon>
                <AddCircle />
            </ListItemIcon>
            <ListItemText 
            classes={{
                primary: classDrawer.listItemText
            }}
            primary={"Familia"} />
        </ListItem>
    </List>
    
    
    </Drawer>
    )
}