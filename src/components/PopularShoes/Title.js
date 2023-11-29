import React from 'react'
import useStyles from "./title.styles";
import { Grid,Typography,Button } from "@material-ui/core";


export default function Title({title}) {
    const classes = useStyles()
  return (
    <Grid className={classes.root} item xs={12} container direction="row" justify="space-between" alignItems='center'>
        <Typography className={classes.title} variant="h5" >{title}</Typography>
        <Button color="primary" variant="contained">مشاهده همه</Button>
    </Grid>
  )
}
