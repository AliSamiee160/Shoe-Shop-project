import React from 'react'
import Title from "./Title";
import Mens from "./Mens";
import Women from "./Women";
import Kids from "./Kids";
import { Grid } from "@material-ui/core";

export default function PopularShoes() {
  return (
    <Grid container>
        <Title title="پرفروش های مردانه" />
        <Mens/>
        <Title title="پرفروش های زنانه" />
        <Women />
        <Title title="پرفروش های بچگانه" />
        <Kids />
    </Grid>
  )
}
