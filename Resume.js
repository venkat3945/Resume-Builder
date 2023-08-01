import React from "react";
import { useLocation } from "react-router-dom";
const Resume = (props) =>{
    const location = useLocation();
    const searchparams = new URLSearchParams(location.search);
    const formdata = {
        name: searchparams.get('name') || '',
        mail: searchparams.get('mail') || '',
        phno: searchparams.get('phno') || '',
        skills: searchparams.get('skills') || '',
        education: searchparams.get('edu') || '',
    }
    return(
        <div className="a4-container">
            <h2 id ="name">Name: {formdata.name}</h2>
            
            <div id="cont">
            <h2>Contact Info</h2>
                <h4>Mail ID: {formdata.mail}</h4>
                <h4>Phone Number: {formdata.phno}</h4>
            </div>
            
            <h4 id="skills">Skills: {formdata.skills}</h4>
            <h4>Education: {formdata.education}</h4>
        </div>
    )
}
export default Resume;