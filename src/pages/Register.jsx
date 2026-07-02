import React, { useState } from "react";
import axios from "axios";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            alert("Fill all the fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

            const response = await axios.post(
                "http://localhost:8080/users/register",
                {
                    email: email,
                    name: name,
                    password: password
                }
            );

            console.log(response.data);
            alert("Registered Successfully");

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        } catch (error) {
            console.log(error);
            alert("Registration Failed");
        }
    };

    return (
        <div className="container">
            <div className="register">

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        value={name}
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <br /><br />

                    <input
                        type="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <br /><br />

                    <input
                        type="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <br /><br />

                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <br /><br />

                    <button type="submit">
                        Register
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Register;