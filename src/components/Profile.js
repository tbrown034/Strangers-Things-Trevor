import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
        const getMyInfo = () => {
        const returnedInfo =  getUserInfo(token);
        setMyInfo(returnedInfo);
        }
      getMyInfo();
    }
  }, []);

  return (
    <div>
      <h1>Welcome to your profile {myInfo.userName}!</h1>
      <div>Your Messages:</div>
      <div>You currently have no messages!</div>
    </div>
  )
};

export default Profile;