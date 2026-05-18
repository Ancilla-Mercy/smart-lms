import React from "react";
import { useState } from "react";
function Login(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log("Email",email);
        console.log("Password",password);
        if(email===""||password===""){
            alert("Please fill all the fields");
            return;
        }
        alert("Login Successfully");
    }
    return(
            <div className="container">
                <div className="login">
                    <form onSubmit={handleSubmit}>
                        <input type = "text" placeholder = "Enter Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                        <br/><br/>
                        <input type = "password" placeholder = "Enter Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                        <br/><br/>
                        <button type = "submit">Login</button>
                    </form>
                </div>

            </div>

    );
}
export default Login;