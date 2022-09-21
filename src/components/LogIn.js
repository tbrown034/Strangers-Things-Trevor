import React, { useState } from "react";

const LogIn = () => {
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");





return (
    <div>
        <div>
            <h1>Log In</h1>
            {console.log ("enter name and password test", userName, userPass)}
            <form>
                <input placeholder="Username ..." value={userName} onChange={(event) => {
                    setUserName(event.target.value)}}  />
                <input placeholder="Password ..." value={userPass} onChange={(event) => {
                    setUserPass(event.target.value) }}  />
                <button type="submit" onClick={(event) => {
                    setUserName(event.target.value);
                    setUserPass(event.target.value)
                }}>Enter User Name and Password</button>
            </form>
            <div>
                <p>Not registered yet? Sign up here!</p>
            </div>
            
        </div>
    </div>
)}
export default LogIn