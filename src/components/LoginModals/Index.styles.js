import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        width: 300,
        height:'auto',
        backgroundColor:"#1a222a",
        margin:"auto",
        marginTop:80,
        borderRadius:10,
        padding:25,
        '&:focus':{
            outline:'none'
        }
    },
    rootSignUp:{
        width: 500,
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        height:'auto',
        backgroundColor:"#1a222a",
        margin:"auto",
        marginTop:80,
        borderRadius:10,
        padding:25,
        '&:focus':{
            outline:'none'
        },
        [theme.breakpoints.down('xs')]:{
            width:"80%",
        }
    },
    formGrid:{
        paddingLeft:7,
        paddingRight:7,

    },
    
    inputContainer:{
        backgroundColor:'#2a3a48',
        borderRadius:5,
        marginTop:10,
        marginBottom:10,
        border:'1px solid#203d75',
        textAlign:"center"
    },
    button:{
        marginTop:20,
    },
    buttonTwo:{
        marginTop:10,
        fontSize:14,

    },
    codeDiv:{
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        marginTop:8,
        
    },
    counter:{
        textAlign:"center",
        width:"100%",
        marginTop:15,
        color:"#b3aeae"
    },
    buttonText:{
        marginTop:10,
    }

}))