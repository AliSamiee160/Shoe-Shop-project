import React from 'react'
import { Typography,Button } from "@material-ui/core";
import useStyles from "./Item.styles";

export default function Item({item}) {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        <div className={classes.rightSlider}>
            <img src={item.image} className={classes.image} alt="" />
        </div>
        <div className={classes.leftSlider}>
            <Typography variant="h2">{item.title}</Typography>
            <Typography variant="subtitle1">{item.subtitle}</Typography>
            <Typography variant="body1">{item.price}  تومان</Typography>
        </div>
        <div>
            <Typography className={classes.discount} variant='h6'>{item.discount}% تخفیف</Typography>
        </div>
        <div className={classes.buttonDiv}>
            <Button variant='outlined' color='primary'>
                مشاهده جزییات
            </Button>

        </div>
    </div>
  )
}
