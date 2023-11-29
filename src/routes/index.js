import React from 'react'
import {Route,Routes } from "react-router-dom";
import Home from "../screens/home/Home";

export default function index() {
  return (
    
      <Routes>
        <Route exact path='/' element={<Home />}>
            
        </Route>
        {/* <Route  path='/login' element={<Login />}>
            
        </Route>
        <Route  path='/register' element={<Register />}>
            
        </Route>
        <Route  path='/Upload' element={<Upload />}>
            
            </Route>
        <Route  path='/profile' element={<Profile />}>
            
        </Route>
        <Route  path='/paginate/:page' element={<Paginate />}>
            
            </Route>  */}
          
    </Routes>


  )
}
