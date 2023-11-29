import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./CartItem.styles";
import DeleteIcon from "@material-ui/icons/Delete";
import shoeImg from "../../../assets/images/shoe.png";

export default function CartItem() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rightContent}>
        <img src={shoeImg} alt="" className={classes.shoeImg} />
        <div className={classes.descDiv}>
          <Typography variant="h5" color="textprimary">
            کفش آدیداس
          </Typography>
          <div className={classes.DeleteDiv}>
          <Typography variant="subtitle2" color="textprimary">
            30,000
          </Typography>
            <DeleteIcon className={classes.deleteIcon} />
          </div>
        </div>
      </div>

    </div>
  )
}
