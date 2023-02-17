import React, { useEffect } from 'react'
import "./Login.css"
// import {auth, provider} from './firebase'
import { Button } from '@mui/material';
import { auth, provider } from "./firebase";
// import { useEffect } from 'react';


function Login() {

    const SignIn = ()=>{
          // do sign in
      auth.signInWithPopup(provider).catch((error) => alert(error.message));

      useEffect(()=>{
        auth.onAuthStateChanged((authUser) =>{
          if(authUser){
            // user is logged in
          }else{
            // user is logged off
          }
        })
      },[])
    };
  return (
    <div className='login'>
      <h2>I am the login page</h2>

      <div className="login__logo">
        <img src="./download.png" alt="Discord" />
      </div>

      <Button onClick={SignIn}>Sign In</Button>
    </div>

  )
}

export default Login
