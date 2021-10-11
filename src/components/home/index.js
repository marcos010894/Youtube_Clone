import { makeStyles } from "@material-ui/core";
import MenuAppBar from "../appbar/topbar";

const useStyle = makeStyles ( (theme) => ({
    root: {

        // background: theme.palette.primary.main,
        // padding: theme.spacing(2),
        height: '100vh'

    }
}));

export default function Home(){
    const classesCss = useStyle();
    return (
        <div>
          <MenuAppBar></MenuAppBar>
        </div>

    )
}