import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>({
    root:{
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        paddingRight:5,
        paddingLeft:5,
        width:80,
        height:"100%",
        border:"1px #202d2a solid",
        transition:"0.5s",
        position:"relative",
        cursor:'pointer',
        boxShadow:"2px 3px 4px 0px #272b2b",

    },
    topDiv:{
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        transition:"0.5s",
        position:"relative",
        '&:hover': {
            opacity:0.5,
            transition:"0.5s",
            
        }
    },
    profileImg:{
        width:35,
        borderRadius:'50%',
        borderColor:theme.palette.primary.main,
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:40,

    },
    menuContent:{
        width:200,
        backgroundColor:"#fff",
        position:"absolute",
        top:60,
        right:0,
        borderRadius:15,
        padding:10,
        boxShadow:"1px 1px 4px 0px #57b0d6",
        zIndex:1,


    }

}))