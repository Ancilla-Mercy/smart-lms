import React from "react";
import { useState } from "react";
function Register(){
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirmPassword,setConfirmPassword] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
    if(!name ||!email ||!password ||!confirmPassword){
        alert("Fill all the fields");
        return;
    }
    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }
    console.log(name,email,password);
    alert("Registered Successfully")
    };
    return(
        <div className="container">
            <div className="register">
                <form onSubmit= {handleSubmit}>
                    <input type = "text" value = {name} placeholder = "Enter Name" onChange = {(e) => setName(e.target.value)}/>
                    <br/><br/>
                    <input type = "email" value = {email} placeholder = "Enter Email" onChange = {(e) => setEmail(e.target.value)}/>
                    <br/><br/>
                    <input type = "password" value = {password} placeholder = "Enter Password" onChange = {(e) => setPassword(e.target.value)}/>
                    <br/><br/>
                    <input type = "password" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)}/>
                    <br/><br/>
                    <button type = "submit">Register</button>

                </form>
            </div>            
        </div>

    );
};
export default Register;