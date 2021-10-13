import {Drawer, Button, Toolbar, List, ListItem, ListItemIcon, Divider, ListItemText} from '@material-ui/core';
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
    <List style={{padding:"1px"}}>        
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

    <List style={{padding:"1px"}}>        
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

    <List style={{padding:"1px"}}>        
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
    <List style={{padding:"1px"}}>        
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
    <List style={{padding:"1px"}}>        
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
    <List style={{padding:"1px"}}>        
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
    <List style={{padding:"1px"}}>        
        <Divider/>    
        <ListItem button key={"Inicio"}
        classes={{
            root: classDrawer.listItem
        }}>
         <p className={classDrawer.textTitle}> O Melhor do youtube. </p>
        </ListItem>
    </List>
    <List style={{padding:"1px"}}>        
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

    <List style={{padding:"1px"}}>        
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

    <List style={{padding:"1px"}}>        
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
    <List style={{padding:"1px"}}>        
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
    <List style={{padding:"1px"}}>        
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
    <List style={{padding:"1px"}}>        
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
    <List style={{padding:"1px"}}>        
        <ListItem button key={"Tecnologia"}
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
            primary={"Tecnologia"} />
        </ListItem>
        <List style={{padding:"1px"}}>        
        <ListItem button key={"Inteligencia IA"}
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
            primary={"Inteligencia IA"} />
        </ListItem>
        <List style={{padding:"1px"}}>        
        <ListItem button key={"Futebol"}
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
            primary={"Futebol"} />
        </ListItem>
        <List style={{padding:"1px"}}>        
        <ListItem button key={"VoleiBol"}
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
            primary={"VoleiBol"} />
        </ListItem>
        
    </List>
    </List>
    </List>
    </List>
    
    </Drawer>
    )
}