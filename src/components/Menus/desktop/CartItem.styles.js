import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>({
       root:{
        padding:10,
        borderBottomColor:theme.palette.border.cartItemBorder,
        borderBottomStyle:"solid",
        borderBottomWidth:1,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

       },
       deleteIcon:{
              color:"aqua",
              width:20, 
          },
          shoeImg:{
                 width:60,
                 backgroundColor:'#90caf9',
                 borderRadius:10,
                 
          },
          rightContent:{
                 display:"flex",
                 flexDirection:"row",
                 alignItems:"center",
                 width:"100%",

         
          },
          descDiv:{
                 marginLeft:10,
                 flex:1,
                 display:"flex",
                 flexDirection:"column",
                 justifyContent:"space-between",
          },
          DeleteDiv:{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"space-between"   
          } 



}))