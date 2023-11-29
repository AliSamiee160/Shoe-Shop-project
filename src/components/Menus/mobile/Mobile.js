import React ,{useState} from 'react'
import { SwipeableDrawer } from "@material-ui/core";
import useStyles from "./index.styles";
import CartButton from "../desktop/CartButton";
import MenuIcon from "@material-ui/icons/MenuOpenRounded";
import textLogo from "../../../assets/images/brandlogo.png";
import MenuItems from "./MenuItems";


export default function Mobile() {
  const classes = useStyles()
  const [open,setOpen] = useState(false)
  const toggleOpenMenu=()=> {
    setOpen(!open)
  }
  return (
    <div className={classes.root}>
      <div className={classes.rightMenu} onClick={toggleOpenMenu}>
        <MenuIcon className={classes.MenuIcon} />
      </div>
      <div className={classes.centerMenu}>
        <img src={textLogo} alt="" className={classes.textLogo}/>
      </div>
      <div className={classes.leftMenu}>
        <CartButton />
      </div>
      <SwipeableDrawer onOpen={toggleOpenMenu} open={open} onClose={toggleOpenMenu}>
        <MenuItems/>
      </SwipeableDrawer>
    </div>
  )
}
