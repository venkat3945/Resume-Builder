import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Loginfirebaseconfig";
const Login = ()=>{
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const navigate = useNavigate();
    const submithandle = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((usercredential)=>{
            alert("login success");
            navigate('/Homepage');
        })
        .catch((error)=>{
            console.log(error);
        });
        };
    
    return(
        <div>
            
            <h1>Welcome to Resume Builder</h1>
            <h3>Please login to enter </h3>
            <br></br>
            <form onSubmit={submithandle}>
                <label>E-Mail</label>
                <input type="email" name="email" onChange={(e)=> setemail(e.target.value)} value={email}></input><br /><br></br>
                <label>Password</label>
                <input type="password" name="password" onChange={(e)=> setpassword(e.target.value)} value={password}></input><br /><br></br>
                <input type="submit" value="Login"></input>
            </form>
            <p>Don't have an account</p><Link to="/Register">Register</Link>
          
        </div>
    )
}
export default Login;