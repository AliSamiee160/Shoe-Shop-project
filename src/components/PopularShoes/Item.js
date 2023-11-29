import React from 'react'
import useStyles from "./item.styles";
import { Typography } from "@material-ui/core";
import S3 from "../../assets/images/shoe3.png";

export default function Item() {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        <img className={classes.image} src={S3} alt=""/>
        <Typography variant='h3'>کفش اول</Typography>
        <Typography className={classes.subTitle} variant='h5'>زیر عنوان کفش است</Typography>
        <Typography className={classes.subTitle} variant='h5'>70,000 تومان</Typography>
        <div className={classes.pointDiv}>
            <Typography variant='body2'>4.9</Typography>
        </div>


    </div>
  )
}
