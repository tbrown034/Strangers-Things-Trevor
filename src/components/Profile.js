import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({});
  const token = localStorage.getItem("token");
  useEffect(() => {
		const displayUserInfo = async () => {
			const getmyInfo = await getUserInfo(token);
			setMyInfo(getmyInfo)
		}
		displayUserInfo()
}, []);

    const userName = myInfo.data.username;

  return (
    <div>
      <h1>Welcome to your profile  {userName} !</h1>
      <div>Your Messages:</div>
      <div>You currently have no messages!</div>
    </div>
  )


};

export default Profile;

