import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import useStyles from "./MasterLayOut.styles";
import DesktopMenu from "../components/Menus/desktop/Desktop";
import MobileMenu from "../components/Menus/mobile/Mobile";
import Footer from "../components/Footer/index";
import LoginModals from "../components/LoginModals/Index";
import Routes from "../routes/index";


export default function MasterLayout() {
  const classes =useStyles()
  return (
    <Router>
    
         <div className={classes.root}>
              <Hidden xsDown> 
                  <DesktopMenu />
              </Hidden>
              <Hidden smUp> 
                  <MobileMenu />
              </Hidden>
              <Routes/>

              <Footer/> 
         </div>
         <LoginModals/>


      </Router> 
  )
}
