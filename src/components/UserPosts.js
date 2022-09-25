import React, { useState, useEffect } from "react";
import { getUserPosts} from "../api";

const UserPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    useEffect(() => {
      const token = localStorage.getItem("token");
          const displayUserPosts = async () => {
              const returnedUserPosts = await getUserPosts(token);
              setMyPosts(returnedUserPosts)
          }
          displayUserPosts()
  }, []);
  return (
  <div>
    <h1>Your Posts!</h1>
    {myPosts ? myPosts.map((singleMessage, _id) => {
      return (
        <div key={_id}>
           <ul>
              <li> Post Name: {singleMessage.title}</li>
              <li> description: {singleMessage.description}</li>
							<li> Seller: {singleMessage.author.username}</li>
							<li> Location: {singleMessage.location}</li>
							<li> Post Created: {singleMessage.createdAt}</li>
              <li> From User: {singleMessage.messages.fromUser.username}</li>
              <li> Message from Others: {singleMessage.messages.content}</li>
            </ul>
        </div>
      )
    }
    ) : null}
  </div>    
  )
}

export default UserPosts 
