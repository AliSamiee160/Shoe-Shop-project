import React,{useContext,useEffect,useState} from 'react'
import { Modal,TextField,Typography,Button } from "@material-ui/core";
import useStyles from "./Index.styles";
import ReactCodeInput from "react-code-input";
import { LoginContext } from "../../contexts/LoginContext";
import { SIGNUP,FORGET_PASSWORD,CHANGE_PASSWORD,SIGNIN } from "../../constants/ActionType";

export default function CodeModal() {
  const{state,dispatch} = useContext(LoginContext)
  const [counter , setCounter] = useState(10)
  const classes = useStyles()
  const codeType = localStorage.getItem('loginCodeType')

  useEffect(()=>{
    setInterval(()=>{
      setCounter((OldCounter)=>OldCounter === 0 ? 0 : OldCounter - 1 )
    },1000)
  },[])

  const checkCode = () => {
    if(codeType==='signUp') {

    }else {
      dispatch({type:CHANGE_PASSWORD})
    }
  }

  const sendCodeAgain = () => {
    //
    setCounter(30)
  }



  return (
    <Modal open={state.code} onClose={()=>dispatch({type:"closeAll"})}   >
      <div className={classes.root} >
        <Typography  variant='h6'>
          کد ارسالی را در کادر زیر وارد کنید
        </Typography>
        {/* <TextField 
        classes={({root:classes.inputContainer})}
          variant='filled'
        //  label="تلفن همراه"
         fullWidth 
         size='small'
          /> */}
          <div dir='ltr' className={classes.codeDiv}>
              <ReactCodeInput fields={5}
              inputStyle={{
                backgroundColor:"#2a3a48",
                width:35,
                height:35,
                margin:5,
                border:"none",
                textAlign:"center",
                color:"#fff",
                fontSize:18,
              }}
              />

          </div>
          {counter !==0 ? (
                    <Typography variant='h6' className={classes.counter}>
                      {counter} ثانیه تا پایان اعتبار کد  
                    </Typography>
          ):
          <Button fullWidth variant='text' color='primary' className={classes.buttonText} onClick={sendCodeAgain} >
                    <Typography variant='h6' >
                          درخواست مجدد کد 
                    </Typography>
          </Button>
          }

          <Button className={classes.button} variant="outlined" color='primary' disabled={counter===0}
           fullWidth onclick={checkCode}>تایید کد</Button>

          <Button className={classes.buttonTwo}
           variant="text"
           color='primary'
            onClick={() =>{
              dispatch({type:codeType==="signUp"? SIGNUP:FORGET_PASSWORD})
            }}
             >اصلاح شماره موبایل</Button>

          <Button className={classes.buttonTwo} variant="text" color='primary' onclick={()=>dispatch({type:SIGNIN})} > ورود به سایت</Button>

      </div>
    </Modal>
  )
}
