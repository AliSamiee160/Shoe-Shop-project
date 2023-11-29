import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    topGrid:{
        display:"flex",
        marginTop:10,
        marginBottom:10,

    },
    sliderGrid:{
        height:500,
        padding:10,
        paddingLeft:0,
        [theme.breakpoints.down("xs")]:{
            height:350
        }
        
    },
    catGrid:{
        height:500,
        padding:10,
        paddingRight:0,
        // border:"1px solid #000",
    },
    itemsGrid:{
        height:180,
        marginTop:10,
        marginBottom:10,
    }

}))