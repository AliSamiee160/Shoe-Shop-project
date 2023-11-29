import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>({

    root:{
        width:240,
        height:250,
        backgroundColor:"#131a21",
        border:"1px solid #3d495caa",
        display:"flex",
        alignItems:'center',
        flexDirection:"column",
        position:"relative"


    },
    image:{
        width:"70%",
        borderRadius:60,
        marginTop:10,
        marginBottom:10,
        // height:250,
    },
    subTitle:{
        marginTop:10,
        color:"#6ca9bd",
    },
    pointDiv:{
        position:"absolute",
        right:2,
        top:2,
        width:40,
        height:40,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:40,
        backgroundColor:theme.palette.secondary.main,
        opacity:0.8,
    }

}))