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
        position:"relative",
        boxShadow:"2px 3px 4px 0px #272b2b",

    },
    topDiv:{
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        transition:"0.5s",
        cursor:'pointer',
        position:"relative",
        '&:hover': {
            opacity:0.5,
            transition:"0.5s",
            
        },
        [theme.breakpoints.down('xs')]:{
            '&:hover': {
                opacity:1,
                transition:"0.5s",
                
            },
        }
    },
    shopIcon:{
        fontSize:35,
        color:theme.palette.icon.shopIcon
    },
    badge:{
        width:20,
        height:20,
        backgroundColor:'red',
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:"50%",
        position:'absolute',
        top:0,
        left:-5,
    },
    cartContent:{
        width:300,
        backgroundColor:"#2e455f",
        position:"absolute",
        top:62,
        right:0,
        borderRadius:5,
        padding:10,
        boxShadow:"1px 1px 4px 0px #57b0d6",
        zIndex:1,
    },
    PriceDiv:{
        padding:10,
        borderBottomColor:theme.palette.border.cartItemBorder,
        borderBottomStyle:"solid",
        borderBottomWidth:1,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    button:{
        marginTop:10,
    }

}))