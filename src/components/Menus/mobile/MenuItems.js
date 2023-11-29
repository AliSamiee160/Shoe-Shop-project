import React from "react";
import {List,ListItem,ListItemIcon,ListItemText, Typography,} from "@material-ui/core";
import useStyles from "./MenuItems.styles";
import { Link,useLocation } from "react-router-dom";
import drawerLogo from "../../../assets/images/brandlogo.png";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import BlogIcon from "@material-ui/icons/Mood";
import ContactIcon from "@material-ui/icons/ContactPhone";
import PersonIcon from "@material-ui/icons/Person";

export default function MenuItems() {
  const classes = useStyles()
  const location =useLocation()
  const path = location.pathname
  return (
    <div className={classes.root}>
      <div className={classes.TopDrawer}>
        <img src={drawerLogo} alt="shoeshop" className={classes.drawerLogo} />
      </div>
      <div >
        <List>
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                    <HomeIcon className={classes.menuIcon} />
                </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6" color={path ==='/' ? 'primary' : 'textSecondary'}>
                            صفحه اصلی
                         </Typography>
                    </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/faq">
                <ListItemIcon>
                    <QuestionAnswerIcon className={classes.menuIcon} />
                </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6" color={path ==='/faq' ? 'primary' : 'textSecondary'}>
                            سوالات پرتکرار
                         </Typography>
                    </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/blog">
                <ListItemIcon>
                    <BlogIcon className={classes.menuIcon} />
                </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6" color={path ==='/blog' ? 'primary' : 'textSecondary'}>
                             بلاگ
                         </Typography>
                    </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                    <ContactIcon className={classes.menuIcon} />
                </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6" color={path ==='/contact' ? 'primary' : 'textSecondary'}>
                             تماس با ما
                         </Typography>
                    </ListItemText>
            </ListItem>
            <ListItem >
                <ListItemIcon>
                    <PersonIcon className={classes.menuIcon} />
                </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6" color= 'textSecondary'>
                             ورود/ثبت نام
                         </Typography>
                    </ListItemText>
            </ListItem>
        </List>
      </div>
    </div>
  );
}
