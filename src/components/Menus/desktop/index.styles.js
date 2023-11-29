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
    brandDiv:{
        width:200,
    },
    brandImg:{
        width:"90%",
        height:40
    
    },
    menuDiv:{
        display:'flex',
        flex:1,
        alignItems:'center',
    },
    activeMenu:{
        color:theme.palette.text.primary
    },
    inActiveMenu:{
        color:theme.palette.text.inActiveMenu
    },
    activeMenuDiv:{
        borderBottomColor:'#00c1c9',
        borderBottomWidth:2,
        borderRadius:5,
        borderBottomStyle:'solid',

    },
    leftMenuDiv:{
        height:'100%',
        // width:160,
        paddingRight:40,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    },
}))