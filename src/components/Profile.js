import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({});
  const token = localStorage.getItem("token");
  const clearUserInfo = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
  };

  useEffect(() => {
		const displayUserInfo = async () => {
			const getmyInfo = await getUserInfo(token);
			setMyInfo(getmyInfo)
		}
		displayUserInfo()
}, []);

  return (
    <div>
      <h1>Welcome to your profile, !</h1>
      <div>Your Messages:</div>
      <div>You currently have no messages!</div>
      <button onClick={clearUserInfo()}>Log Out</button>
    </div>
  )
};

export default Profile;

