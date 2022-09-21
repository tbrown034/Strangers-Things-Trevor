import React, { useState } from "react";
import { registerUser } from "../api";


const Register = () => {
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const submitForm = async (event) => {
        event.preventDefault();
        if (userPass !== confirmPassword) {
            alert("Passwords to do not match. Try again!")}
        else {await registerUser(userName, userPass);
            setUserName("");
            setUserPass("");
            setConfirmPassword("");
            alert("Success!")
        };
       
    }



return (
    <div>
        <div>
            <h1>Register</h1>
            <h3>Note: Name and password must be at least eight charcters long</h3>
            {console.log ("enter name and password test", userName, userPass)}
            <form id="registerForm" onSubmit={submitForm}>
                <input placeholder="Create a username ..." type="text" required minLength="8" value={userName} onChange={(event) => {
                    setUserName(event.target.value)}}  />
                <input placeholder="Create a password ..." type="password" required value={userPass} onChange={(event) => {
                    setUserPass(event.target.value) }}  />
                <input placeholder="Confirm your password ..." type="password" required value={confirmPassword} onChange={(event) => {
                    setConfirmPassword(event.target.value) }}  />    
                <button type="submit">Create Your Account!</button>
            </form> 
        </div>
    </div>
)}
export default Register