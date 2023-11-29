import React from 'react'
import useStyles from "./HomeStyle";
import { Container,Grid } from "@material-ui/core";
import Slider from "../../components/slider/Index";
import Categories from "../../components/catagory/Index";
import PopularShoes  from "../../components/PopularShoes/PopularShoes";

export default function Home() {
  const classes = useStyles()
  return (
    <Container maxWidth='lg'>
      <Grid className={classes.topGrid} direction='row' container>
          <Grid className={classes.sliderGrid} item lg={6} xs={12}>
              <Slider/>
          </Grid>
          <Grid className={classes.catGrid} item lg={6} xs={12} >
                <Categories/>
          </Grid>
      </Grid>
      <PopularShoes />
    </Container>
  )
}
