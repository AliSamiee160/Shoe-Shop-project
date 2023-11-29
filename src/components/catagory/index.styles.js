import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    root:{

    },
    image:{
        width:85,
        height:86,
        marginRight:10,
        backgroundColor:"black"
    },
    catDiv:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        width:"100%",
        padding:10,
        backgroundColor:"#131a21",
        borderRadius:5,
        marginBottom:10, 
        marginTop:10,
        border:"1px solid #6e7f9daa",
        position:"relative"

    },
    titleButton:{
        fontSize:12,
    },
    divButton:{
        position:"absolute",
        bottom:0,
        right:4
    }
}))