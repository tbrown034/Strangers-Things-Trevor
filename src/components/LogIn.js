import React, { useState } from "react";

const LogIn = () => {
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
return (
    <div>
        <div>
            <h1>Log In</h1>
            <form>
                <input placeholder="Username ..." value={userName} onChange={(event) => {
                    setUserName(event.target.value)
                }}  />
                <button type="submit" onClick={(event) => {
                    setUserName(event.target.value)
                }}>Enter User Name</button>
            </form>
            <form>
                <input value={userPass} placeholder="Password ..." onChange={(event) => {
                    setUserPass(event.target.value)
                }
                }  />
                <button type="submit" onClick={(event) => {
                    setUserPass(event.target.value)
                }
                } >Enter Password</button>
            </form>
        </div>
    </div>
)   
}
export default LogIn