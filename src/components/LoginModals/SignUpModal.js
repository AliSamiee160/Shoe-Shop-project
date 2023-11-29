import React,{useContext} from 'react'
import { Modal,TextField,Typography,Button,Grid } from "@material-ui/core";
import useStyles from "./Index.styles";
import { LoginContext } from '../../contexts/LoginContext';
import { SIGNIN ,CODE} from "../../constants/ActionType";

export default function SignUpModal() {
  const {state,dispatch} = useContext(LoginContext)
  const signUp =()=> {
    localStorage.setItem('loginCodeType','forgetPassword')

    dispatch({type:CODE})
  }
  const classes = useStyles()
  return (
    <Modal open={state.signup} onClose={()=>dispatch({type:"closeAll"})}   >
      <div className={classes.rootSignUp} >
      <Grid className={classes.formGrid} item lg={6} xs={12}>
        <Typography variant='h6'>نام و نام خانوادگی</Typography>
        <TextField 
        classes={({root:classes.inputContainer})}
          variant='filled'
        //  label="تلفن همراه"
         fullWidth 
         size='small'
          />
      </Grid>
        <Grid className={classes.formGrid}  item lg={6} xs={12} >
        <Typography variant='h6'>تلفن همراه:</Typography>
        <TextField 
        classes={({root:classes.inputContainer})}
          variant='filled'
        //  label="تلفن همراه"
         fullWidth 
         size='small'
         placeholder='*********09'
          />
        </Grid>
        <Grid className={classes.formGrid}  item lg={6} xs={12} >
         <Typography variant='h6'>رمز عبور:</Typography>
        <TextField 
        classes={({root:classes.inputContainer})}
        variant='filled'
        //  label="تلفن همراه"
         fullWidth 
         size='small'
         placeholder='*********'
          />
        </Grid>
        <Grid className={classes.formGrid}  item lg={6} xs={12}>
        <Typography variant='h6'>تکرار رمز عبور</Typography>
        <TextField 
        classes={({root:classes.inputContainer})}
        variant='filled'
        //  label="تلفن همراه"
         fullWidth 
         size='small'
         placeholder='*********'
          />
        </Grid>
        <Grid className={classes.formGrid}  item lg={12}>
        <Button
         className={classes.button}
          variant="outlined"
           color='primary'
            fullWidth
            onClick={signUp}
            >ثبت نام</Button>
        </Grid>
        <Grid className={classes.formGrid}  item lg={12}>
          <Button
           className={classes.buttonTwo}
            variant="text"
             color='primary'
             onClick={()=> dispatch({type:SIGNIN})}
              >   قبلا ثبت نام کرده اید؟ </Button>
        </Grid>
          {/* <Button className={classes.buttonTwo} variant="text" color='primary' >رمز عبور خود را فراموش کرده اید؟</Button> */}

      </div>
    </Modal>
  )
}
