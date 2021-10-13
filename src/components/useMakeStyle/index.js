import { makeStyles } from "@material-ui/core";
import { theme } from "../../components/theme";

export const useStyle = makeStyles ( () => ({
    root: {
        // background: theme.palette.primary.main,
        // padding: theme.spacing(2),
        height: '100vh'
    },
    appBar:{
        boxShadow: 'none',
        position: "fixed",
        minHeight:45     
    },
    recommendationAppBar:{
        boxShadow: 'none',
        position: "fixed",
        minHeight: 45,
        borderBottom:"1px solid #e7e7e7 ",
        borderTop:".5px solid #e7e7e7 ",
        minHeight:45,
        
    },
    drawer:{
        width:240,
        flexShrink:0,
        zIndex:1,
    },
    avatar:{
        height:'50px',
        borderRadius:"50%",
        padding:8
    },
    textCenter:{
        textAlign:"center",
    },
    textTitle:{
        textAlign:"left",
        fontWeight:"bold",
        paddingTop:10,
        textTransform:"uppercase"
    },
    textpadding:{
        paddingLeft:15,
        textAlign:"left",
        fontWeight:"bold"
    },
    widthBrn:{
        width: 165,
    },
    drawerPaper:{
        width:240,
        border:'none',
        textAlign:"right"
    },

    grow: {
        flexGrow: 1,
    },
    btnLogin:{
        color: "#3f51b5"
    },
    listItemText:{
        fontSize: 14,
    },
    listItem:{
        paddingTop:4,
        paddingBottom:4
    },
    icons:{
        paddingRight: theme.spacing(4)
    },
    spacing:{
        paddingRight: theme.spacing(4)
    },
    menuicon:{
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    logo:{
        height: 30
    },
    inline:{
        display: "inlineBlock"
    },
    recommendationButton:{
        borderRadius: "50px",
        boxShadow:"none",
    },
    responsiveMobile:{
        display: 'flex',
        ['@media (max-width:1080px)'] : {
          display: 'none'
        }
    },   
    openMenu:{
        display: 'flex',
    },
    closeMenu:{
        display: 'none',
    }
}));