import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = ()=>{
    const [formdata,setformdata] = useState({name:'',mail:'',phno:'',skills:'',edu:''});
    const changehandle = (e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value});
    }
    const navigate = useNavigate();
    const submithandle = (e)=>{
        e.preventDefault();
        const querystring = new URLSearchParams(formdata).toString();
        navigate(`/Resume?${querystring}`);

    }
    return(
        <div>
            <h1>Welcome to Build your Resume</h1>
            
            <form onSubmit={submithandle}>
                <label>Name: </label>
                <input type="text" placeholder="Enter your name" name="name"  onChange={changehandle}></input><br />
                <br />
                <label>E-Mail: </label>
                <input type="email" placeholder="Enter your mail" name="mail"  onChange={changehandle}></input><br />
                <br />
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" name="phno"  onChange={changehandle}></input><br />
                <br />
                <label>Skills</label>
                <textarea name="skills"  onChange={changehandle}></textarea><br />
                <br />
                <label>Education</label>
                <textarea name="edu"  onChange={changehandle}></textarea><br />
                <br />
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}
export default Homepage