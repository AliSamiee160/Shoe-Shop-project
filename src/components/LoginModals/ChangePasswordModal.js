import React,{useContext} from 'react'
import { Modal,TextField,Typography,Button } from "@material-ui/core";
import useStyles from "./Index.styles";
import { LoginContext } from "../../contexts/LoginContext";
import { SIGNIN } from "../../constants/ActionType";

export default function ChangePasswordModal() {
  const {state,dispatch} = useContext(LoginContext)
  const classes = useStyles()
  return (
    <Modal open={state.changePassword} onClose={()=>dispatch({type:"closeAll"})}   >
      <div className={classes.root} >
        <Typography variant='h6'>رمز عبور جدید </Typography>
        <TextField 
        classes={({root:classes.inputContainer})}
          variant='filled'
        //  label="تلفن همراه"
         fullWidth 
         size='small'
          />
                  <Typography variant='h6'>تکرار رمز عبور </Typography>
        <TextField 
        classes={({root:classes.inputContainer})}
          variant='filled'
        //  label="تلفن همراه"
         fullWidth 
         size='small'
          />

          <Button className={classes.button} variant="outlined" color='primary' fullWidth>تغییر رمز عبور</Button>


          <Button className={classes.buttonTwo} onClick={()=>dispatch({type:SIGNIN})}
           variant="text"
           color='primary' >بازگشت به فرم ورود</Button>

      </div>
    </Modal>
  )
}
