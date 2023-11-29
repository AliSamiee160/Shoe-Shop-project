import React from 'react'
import { Grid } from "@material-ui/core";
import Item from "./Item";

export default function Mens() {
  return (
    <Grid container direction="row" item xs={12} alignItems="center" justifyContent='space-between' >
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>

    </Grid>
  )
}
