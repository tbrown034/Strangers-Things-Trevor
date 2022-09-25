import React, { useState } from "react";
import { loginUser } from "../api";

const LogIn = () => {
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(false);
    const clearUserInfo = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
      };


    const submitLogForm = async (event) => {
        event.preventDefault();
        try {
        const token = await loginUser(userName, userPass);
        if (token) {
            setUserName("");
            setUserPass("");
            setIsLoggedin(true);
            alert("Log in success!")
        }
        }
        catch(err) {setUserName("");
        setUserPass("");
        alert("Log in attemp failed. Check your spelling or make sure you have already registered!")}
    }
return (
    <div>
        <div>
            <h1>Log In</h1>
            <form id="loginForm" onSubmit={submitLogForm}>
                <input type="text" placeholder="Username ..." value={userName} required onChange={(event) => {
                    setUserName(event.target.value)}}  />
                <input type="password" autoComplete="on" placeholder="Password ..." value={userPass} required onChange={(event) => {
                    setUserPass(event.target.value) }}  />
                <button type="submit">Enter User Name and Password</button>
                
            </form>
            <div></div>
            <div>
                <p>You have successfully logged in, {localStorage.getItem("userName")}</p>
                <button onClick={clearUserInfo}>Log Out</button>
                <p>Not registered yet? Sign up here! </p>
            </div>
            
        </div>
    </div>
)}
export default LogIn