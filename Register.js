import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Loginfirebaseconfig";
const Login = ()=>{
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const submithandle = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((usercredential)=>{
            alert("register success");
        })
        .catch((error)=>{
            console.log(error);
        });
        };
    
    return(
        <div>
            
            
            <h2>Register Here</h2>
            <br></br>
            <form onSubmit={submithandle}>
                <label>E-Mail</label>
                <input type="email" name="email" onChange={(e)=> setemail(e.target.value)} value={email}></input><br /><br></br>
                <label>Password</label>
                <input type="password" name="password" onChange={(e)=> setpassword(e.target.value)} value={password}></input><br /><br></br>
                <input type="submit" value="Register"></input>
            </form>
            
          
        </div>
    )
}
export default Login;