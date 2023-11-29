import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>({
    root:{
        backgroundColor:"#131a21",
        padding:20,
        

    },
    item:{
        
        paddingRight:15,
        [theme.breakpoints.down('xs')]:{
            paddingRight:10,
            marginTop:10,
            marginBottom:10
        }
    },
    address:{
        marginTop:5,
        lineHeight:2
    },
    brandBottom :{
        display:'flex',
        justifyContent:'flex-start',
        
    }


}))