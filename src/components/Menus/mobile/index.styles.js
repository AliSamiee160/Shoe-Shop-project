import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>({
    root:{
        width:"100%",
        height:70,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        backgroundColor:'#131a21',
        boxShadow:"1px 1px 3px 1px #3b3939"
    },
    rightMenu:{
         width:60,
         height:"100%",
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
    },
    centerMenu:{
        flex:1,
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
   },
   leftMenu:{
    width:60,
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
   },
    MenuIcon:{
        width:50,
        height:50,
        color:"aqua",
    },
    textLogo:{
        width:170,
        height:40,

    },

}))