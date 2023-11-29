import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>({

    root:{
        marginTop:10,
        marginBottom:10,
        paddingTop:5,
        paddingBottom:5,
        position:"relative",
        '&:before':{
            content:"''",
            width:5,
            height:"100%",
            backgroundColor:theme.palette.primary.main,
            borderRadius:10,
            position:"absolute",

        },
        [theme.breakpoints.down('xs')]:{
            marginTop:10,
            marginLeft:10,
            marginRight:10,
        }
    },
    title:{
        marginLeft:15,
    }

}))