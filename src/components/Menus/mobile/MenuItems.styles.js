import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>({
    root:{
        width:250,
        height:"100%",
        backgroundColor:"#131a21",
        
    },
    TopDrawer:{
        height:150,
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        borderBottomColor:theme.palette.border.drawerItemBorder,
        borderBottomWidth:1,
        borderBottomStyle:"solid",
    },
    drawerLogo:{
        width:200,
        height:100,
    },
    menuIcon:{
        width:25,
        height:25,
        color:"aqua",
    }

}))