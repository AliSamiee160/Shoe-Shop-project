import React from 'react'
import useStyles from "./index.styles";
import { Grid,Typography,Button ,Container} from "@material-ui/core";
import TitleBorder from "../TitleBorder";

export default function Footer() {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container >
        <Container maxWidth='lg' direction="row">
            <Grid className={classes.root} container >

                    <Grid className={classes.item} item lg={3} xs={12}>
                        <TitleBorder title="فروشگاه کفش"/>
                        <Typography className={classes.address} variant='body2' color='textSecondary'>
                            شاهین شهر عطار فرعی دو شرقی 
                        </Typography>
                        <Typography className={classes.address} variant='body2' color='textSecondary'>
                            تلفن تماس:09114406673 
                        </Typography>
                    </Grid>

                    <Grid className={classes.item} item lg={3} xs={12}>      
                        <TitleBorder title="ویژگی ها"/>
                        <Typography className={classes.address} variant='body2' color='textSecondary'>
                        ارسال رایگان
                        </Typography>
                        <Typography className={classes.address} variant='body2' color='textSecondary'>
                            محصولات اورجینال
                        </Typography>
                        <Typography className={classes.address} variant='body2' color='textSecondary'>
                            قیمت های مناسب
                        </Typography>

                    </Grid>

                    <Grid className={classes.item} item lg={3} xs={12}>
                            <TitleBorder title="برند ها" />
                            <Button className={classes.brandBottom} >
                                <Typography className={classes.address} variant='body2' color='primary'>
                                        آدیداس
                                </Typography>
                            </Button>
                            <Button className={classes.brandBottom} >
                                <Typography className={classes.address} variant='body2' color='primary'>
                                        اسکیچرز
                                </Typography>
                            </Button>
                            <Button className={classes.brandBottom} >
                                <Typography className={classes.address} variant='body2' color='primary'>
                                        نایک
                                </Typography>
                            </Button>

                    </Grid>

                    <Grid className={classes.item} item lg={3} xs={12}>
                            <TitleBorder title="لینک های مفید" />
                            <Button className={classes.brandBottom} >
                                <Typography className={classes.address} variant='body2' color='primary'>
                                        سوالات پرتکرار
                                </Typography>
                            </Button>
                            <Button className={classes.brandBottom} >
                                <Typography className={classes.address} variant='body2' color='primary'>
                                        بلاگ
                                </Typography>
                            </Button>                <Button className={classes.brandBottom} >
                                <Typography className={classes.address} variant='body2' color='primary'>
                                        تماس با ما
                                </Typography>
                            </Button>



                    </Grid>
            </Grid>
        </Container>
    </Grid>
  )
}
