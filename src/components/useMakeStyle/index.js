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
        zndex:2,
        position: "absolute"

    },
    drawer:{
        width:240,
        flexShrink:0,
        zIndex:1,
        position: "absolute",
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
        width: 165
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
    menuicon:{
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    logo:{
        height: 30
    }
    
}));