import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    root:{
        width:"100%",
        height:470,
        backgroundColor:"#011a1d",
        border:"1px solid #6e7f9daa",
        display:'flex',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center',
        position:"relative",
        [theme.breakpoints.down('xs')]:{
            height:300,

        }
    },
    image:{
        width:220,
        borderRadius:"100%",
        backgroundColor:"transparent",
        [theme.breakpoints.down('xs')]:{
            width:110

        }
    },
    rightSlider:{
        width:250,
        [theme.breakpoints.down('xs')]:{
            flex:2

        }
    },
    leftSlider:{
        flex:1,
        [theme.breakpoints.down('xs')]:{
            flex:3

        }

    },
    discount:{
        position:"absolute",
        backgroundColor:"#811c6b",
        top:0,
        left:0,
        padding:10,
        width:110,
        borderBottomRightRadius:100, 
    },
    buttonDiv:{
        position:"absolute",
        bottom:0,
        right:0,
        padding:10,
    },


}))