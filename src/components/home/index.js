import { Hidden } from "@material-ui/core";
import MenuAppBar from "../appbar/topbar";
import  DrawerYt  from '../drawer';
import Feed from "../feed";
import { useStyle } from "../useMakeStyle";
import { Toolbar } from "@material-ui/core";



export default function Home(props){

  const classesRoot = useStyle()
  let menuOpen;
  if(props.comando == "true"){
    menuOpen = classesRoot.openMenu
  }else if(props.comando == "false"){
    menuOpen = classesRoot.closeMenu
  }else{
    menuOpen =classesRoot.responsiveMobile
  }
    // const classesCss = useStyle();
    return (
      <div className={classesRoot.root}>
          <MenuAppBar></MenuAppBar>
          <Toolbar />
          <div className="display">
            <div className={menuOpen}>
               <DrawerYt />
            </div>
            <Feed />
          </div>
        </div>

    )
}