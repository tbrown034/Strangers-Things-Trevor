import React from "react";
import { useState, useEffect } from "react";
import {getUserInfo} from "../api"
const Profile = () => {
    let token = "";
    const [userInfo, setUserInfo] = useState;
    useEffect(() => {
        token = localStorage.getItem("token")
		const displayUserInfo = async () => {
			const recievedUserInfo = await getUserInfo();
			setUserInfo(recievedUserInfo)
		}
		displayUserInfo()
}, []);
    return (
        <div>
            <h1>User Profile</h1>
            <p>Welcome User</p>
        </div>
    )




}

export default Profile 