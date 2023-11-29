import React ,{useState,useContext} from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button,Fade } from "@material-ui/core";
import Avatar from "../../../assets/images/avatar.png";
import useStyles from "./ProfileButton.styles";
import { LoginContext  } from "../../../contexts/LoginContext";
import { SIGNIN,SIGNUP } from "../../../constants/ActionType";
export default function ProfileButton() {
  const {dispatch} = useContext(LoginContext)
    const classes =useStyles()
    const [open,setOpen] = useState(false)
  return (
    <div className={classes.root}>
      <div className={classes.topDiv} onClick={()=>setOpen(!open)}>
        <ExpandMoreIcon />
        <img src={Avatar} alt='' className={classes.profileImg}/>
      </div>
        {open?(
          <Fade in={open}>
                <div className={classes.menuContent}>
                  {localStorage.token?(
                      <>
                        <Button variant="contained" color="primary" size="medium" fullWidth>
                            پروفایل 
                        </Button>
                        <Button variant="text" color="primary" size="small" fullWidth>
                            خروج 
                        </Button>
                      </>
                  ):(
                    <>
                      <Button 

                       variant="contained" 
                      color="primary" 
                      size="medium" 
                      fullWidth
                      onClick={()=>{
                        setOpen(false)
                        dispatch({type:SIGNIN})
                      }}
                      >
                          ورود
                      </Button>
                      <Button variant="text" color="primary" size="small" fullWidth
                        onClick={()=>{
                        setOpen(false)
                        dispatch({type:SIGNUP})
                      }}
                      >
                          ثبت نام
                      </Button>
                    </>
                  )}
        
                </div>
               
          </Fade>
          ):null}

    </div>
  )
}
