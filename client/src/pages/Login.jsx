import React from "react";
import { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Please fill all the fields");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/users/login",
                {
                    email,
                    password
                }
            );

            alert("Login Successfully");
            console.log(response.data);

        } catch (error) {
            alert("Invalid Email or Password");
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br /><br />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br /><br />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;