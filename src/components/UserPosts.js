import React, { useState, useEffect } from "react";
import { getUserPosts, deletePost} from "../api";

const UserPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const handleDeleteButton = (event) => {
      event.preventDefault()
      deleteRoutine(routine.id, token)
      setNewRoutineCount(newRoutineCount+1)
  }
    useEffect(() => {
      const token = localStorage.getItem("token");
          const displayUserPosts = async () => {
              const returnedUserPosts = await getUserPosts(token);
              const userPosts = returnedUserPosts.data.posts 
              setMyPosts(userPosts)
          }
          displayUserPosts()
  }, []);
  return (
  <div>
    <br></br>
    <h2>Your Posts</h2>
    <div id="allposts">
         {
         myPosts.map((singlePost, _id) => {
         return (
           <div id="box"  key={_id }>
             <ul id="marketPlace">
             <li id="itemTitle"> {singlePost.title}</li>
               <ul>
                 <li> Price: {singlePost.price}</li>
                 <li> description: {singlePost.description}</li>
                 <li> Seller: {singlePost.author.username}</li>
                 <li> Location: {singlePost.location}</li>
                 <li> Post Created: {singlePost.createdAt}</li>
               </ul>
             </ul>
           </div>
         ) 
         } )
         }
     </div>
 
   </div> 
     )
 }
 export default UserPosts 











// return (
//   <div>
//     <h1>Your Posts!</h1>
//     {{token} ? myPosts.map((singleMessage, _id) => {
//       return (
//         <div key={_id}>
//            <ul>
//               <li> Post Name: {singleMessage.title}</li>
//               <li> description: {singleMessage.description}</li>
// 							<li> Seller: {singleMessage.author.username}</li>
// 							<li> Location: {singleMessage.location}</li>
// 							<li> Post Created: {singleMessage.createdAt}</li>
//               <li> From User: {singleMessage.messages.fromUser.username}</li>
//               <li> Message from Others: {singleMessage.messages.content}</li>
//             </ul>
//         </div>
//       )
//     }
//     ) : null}
//   </div>    
//   )
// }

// export default UserPosts 
