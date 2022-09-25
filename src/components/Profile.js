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
      <h3>Messages from Shoppers:</h3>
      
        {/* {myInfo.messages._id ? myInfo.map((singleMessage, index) => {
              return (
                <div key={index}>
                  <ul>
                    <li> Post Name: {singleMessage.post.title}</li>
                    <li> From User: {singleMessage.fromUser.username}</li>
                    <li> Message: {singleMessage.content}</li>
                  </ul>
                </div>
              ) 
              } )
              : null} */}
          </div>
        </div> 
          ) :null;
      }

      export default Profile 
      
      