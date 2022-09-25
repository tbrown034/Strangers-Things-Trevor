import React, { useState, useEffect } from "react";
import { getUserMessages} from "../api";

const Profile = () => {
  const [myInfo, setMyInfo] = useState([]);

  const clearUserInfo = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
		const displayUserInfo = async () => {
			const returnedUserInfo = await getUserMessages(token);
			setMyInfo(returnedUserInfo)
		}
		displayUserInfo()
}, []);
  return  localStorage.getItem("userName") ? (
    <div>
      <div>
        <h1>My profile</h1>
        <p>You have successfully logged in, {localStorage.getItem("userName")}</p>
        <button onClick={clearUserInfo}>Log Out</button>
      </div>
      <div>
        <h3>Messages from Shoppers:</h3>
        {myInfo.messages ? myInfo.map((singleMessage, index) => {
              return (
                <div key={index}>
                  <ul>
                    <li> Post Name: {singleMessage.messages.post.title}</li>
                    <li> From User: {singleMessage.messages.fromUser.username}</li>
                    <li> Message: {singleMessage.messages.content}</li>
                  </ul>
                </div>
              ) 
              } )
              : null}
      </div>
      <div>
      </div>
    </div> 
          ) :null;
      }
      
      export default Profile 
      
      