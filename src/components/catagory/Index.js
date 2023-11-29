import React from 'react'
import useStyles from "./index.styles";
import { Typography,Button } from "@material-ui/core";
import S1 from "../../assets/images/shoe1.png";
import S2 from "../../assets/images/shoe2.png";
import S3 from "../../assets/images/shoe3.png";

export default function Index() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        <div className={classes.catDiv}>
          <img src={S1} alt="" className={classes.image} />
          <Typography variant="h1">کفش مردانه</Typography>
          <div className={classes.divButton}>
            <Button variant='outlined' color="secondary">
              <Typography className={classes.titleButton} variant="subtitle2">مشاهده کفش ها</Typography>
            </Button>
          </div>
        </div>
        <div className={classes.catDiv}>
          <img src={S2} alt="" className={classes.image} />
          <Typography variant="h1">کفش زنانه</Typography>
          <div className={classes.divButton}>
            <Button variant='outlined' color="secondary">
              <Typography className={classes.titleButton} variant="subtitle2">مشاهده کفش ها</Typography>
            </Button>
          </div>
        </div>
        
        <div className={classes.catDiv}>
          <img src={S3} alt="" className={classes.image} />
          <Typography variant="h1">کفش بچگانه</Typography>
          <div className={classes.divButton}>
            <Button variant='outlined' color="secondary">
              <Typography className={classes.titleButton} variant="subtitle2">مشاهده کفش ها</Typography>
            </Button>
          </div>
        </div>
        <div className={classes.catDiv}>
          <img src={S1} alt="" className={classes.image} />
          <Typography variant="h1">همه کفش ها </Typography>
          <div className={classes.divButton}>
            <Button variant='outlined' color="secondary">
              <Typography className={classes.titleButton} variant="subtitle2">مشاهده کفش ها</Typography>
            </Button>
          </div>
        </div>
    </div>

  )
}
