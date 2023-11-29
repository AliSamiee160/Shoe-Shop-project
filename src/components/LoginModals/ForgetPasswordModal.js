import React,{useContext} from 'react'
import { Modal,TextField,Typography,Button } from "@material-ui/core";
import useStyles from "./Index.styles";
import { LoginContext } from '../../contexts/LoginContext';
import { CODE,SIGNIN,SIGNUP } from "../../constants/ActionType";

export default function ForgetPasswordModal() {
  const {state,dispatch} = useContext(LoginContext)
  const classes = useStyles()
  const forgetPassword = () =>{
    localStorage.setItem('loginCodeType','forgetPassword')
    dispatch({type:CODE})
  }
  return (
    <Modal open={state.forgetPassword} onClose={()=>dispatch({type:"closeAll"})}   >
      <div className={classes.root} >
        <Typography variant='h6'>تلفن همراه</Typography>
        <TextField 
        classes={({root:classes.inputContainer})}
          variant='filled'
        //  label="تلفن همراه"
         fullWidth 
         size='small'
         placeholder='*********09'
          />

          <Button className={classes.button} variant="outlined" onClick={forgetPassword}
           color='primary'
           fullWidth>فراموشی رمز عبور</Button>

          <Button className={classes.buttonTwo} variant="text" 
          color='primary' onClick={()=> dispatch({type:SIGNIN})}  >بازگشت به فرم ورود</Button>

          <Button className={classes.buttonTwo} variant="text" onClick={()=> dispatch({type:SIGNUP})}
           color='primary' >ثبت نام</Button>

      </div>
    </Modal>
  )
}
