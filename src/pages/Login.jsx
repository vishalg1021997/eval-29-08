import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')

    const {isAuth,toggleAuth,flag,toggel} = React.useContext(AuthContext)
    

    const handelClick = () => {

        if(flag){
            isAuth(false,'')
            toggleAuth()
            return
        }

        const temp = {
            email:username,
            password:password
        }

        let data

        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body:JSON.stringify(temp),
            headers:{
                "Content-Type": "application/json"
            }
        }).then((res) => res.json())
        .then((res) => data = res)
        
        setTimeout(()=>{
            // console.log(data.token? true:false,'data')
            
            // data.token ? isAuth(true,data.token):isAuth(false,'')
            if(data.token){
                isAuth(data.token)
                toggleAuth()
            }
            

        },1000)
        
    }

  return (
    <div>
      <input data-cy="login-email" placeholder='Enter Username' value={username} onChange={(event) => setUsername(event.target.value)}/>
      <input data-cy="login-password" placeholder='Enter Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
      <button data-cy="login-submit" onClick={handelClick}>Login</button>
    </div>
  );
};

export default Login;
