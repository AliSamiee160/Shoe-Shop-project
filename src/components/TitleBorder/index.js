import React from 'react'
import useStyles from "./index.style";
import { Typography } from "@material-ui/core";

export default function Index({title}) {
  const classes = useStyles()

  return (
    <div className={classes.titleDiv}>
        <Typography  variant='h6' color='textPrimary' >
            {title}
        </Typography>
    </div>
  )
}
