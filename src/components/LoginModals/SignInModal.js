import React,{useContext} from 'react'
import { Modal,TextField,Typography,Button } from "@material-ui/core";
import useStyles from "./Index.styles";
import { LoginContext } from '../../contexts/LoginContext';
import { FORGET_PASSWORD,SIGNUP } from "../../constants/ActionType";

export default function SignInModal() {
  const {state,dispatch} = useContext(LoginContext)
  const classes = useStyles()
  return (
    <Modal open={state.signin} onClose={() => dispatch({type:"closeAll"})}   >
      <div className={classes.root} >
        <Typography variant='h6'>تلفن همراه:</Typography>
        <TextField 
        classes={({root:classes.inputContainer})}
          variant='filled'
        //  label="تلفن همراه"
         fullWidth 
         size='small'
         placeholder='*********09'
          />
        <Typography variant='h6'>رمز عبور:</Typography>
        <TextField 
        classes={({root:classes.inputContainer})}
        variant='filled'
        //  label="تلفن همراه"
         fullWidth 
         size='small'
         placeholder='*********'
          />
          <Button className={classes.button} variant="outlined" color='primary' fullWidth>ورود</Button>
          <Button 
          className={classes.buttonTwo} 
          variant="text" 
          color='primary'
          onClick={()=> dispatch({type:SIGNUP})}
           >
            ثبت نام نکرده اید؟
          </Button>
          <Button
           className={classes.buttonTwo}
            variant="text"
            color='primary'
             onClick={()=> dispatch({type:FORGET_PASSWORD})}

              >رمز عبور خود را فراموش کرده اید؟</Button>

      </div>
    </Modal>
  )
}
