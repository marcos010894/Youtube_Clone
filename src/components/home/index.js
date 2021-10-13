import MenuAppBar from "../appbar/topbar";
import  DrawerYt  from '../drawer';
import Feed from "../feed";
import { useStyle } from "../useMakeStyle";
import { Toolbar } from "@material-ui/core";



export default function Home(props){
  const classesRoot = useStyle()
    // const classesCss = useStyle();
    return (
      <div className={classesRoot.root}>
          <MenuAppBar></MenuAppBar>
          <Toolbar />
          <div className="display">
            <div className={classesRoot.responsiveMobile}>
               <DrawerYt />
            </div>
            <Feed />
          </div>
        </div>

    )
}