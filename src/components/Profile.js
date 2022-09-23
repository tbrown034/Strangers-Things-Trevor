import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({});
  useEffect(async() => {
          const getMyInfo = await getUserInfo();
          setMyInfo(getMyInfo);
    }, []);

    // const posts = myInfo.posts;
    const userName = myInfo.username

  return (
    <div>
      <h1>Welcome to your profile  {userName} !</h1>
      <div>Your Messages:</div>
      <div>You currently have no messages!</div>
    </div>
  )


};

export default Profile;

