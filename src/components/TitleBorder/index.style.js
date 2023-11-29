import { makeStyles } from "@material-ui/core";

export default makeStyles(() =>({
    titleDiv:{
        paddingBottom:15,
        width:'100%',
        position:'relative',
        '&:before':{
            content:"''",
            position:"absolute",
            width:120,
            height:4,
            bottom:0,
            borderRadius:4,
            backgroundColor:'#bffcff'

        },
        '&:after':{
            content:"''",
            position:"absolute",
            width:80,
            height:4,
            bottom:0,
            borderRadius:4,
            backgroundColor:'#00c1c9'
        },
    },

}))