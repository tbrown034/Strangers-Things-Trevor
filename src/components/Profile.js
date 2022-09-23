import React, { useState } from "react";
import { getUserInfo } from "../api";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({});
  let token = localStorage.getItem("token");
  if (token) {
      const getMyInfo = () => {
      const returnedInfo =  getUserInfo(token);
      setMyInfo(returnedInfo);
      }
    ;
  return (
    <div>
      <h1>Welcome to your profile you {myInfo.username} !</h1>
      <div>Your Messages:</div>
      <div>You currently have no messages!</div>
    </div>
  )
};}

export default Profile;

// useEffect(() => {
//   let token = localStorage.getItem("token");
//   if (token) {
//       const getMyInfo = () => {
//       const returnedInfo =  getUserInfo(token);
//       setMyInfo(returnedInfo);
//       }
//     getMyInfo();
//   }
// }, []);