import React from "react";
import { useState, useEffect } from "react";
import { BASE_URL } from '../api'
/// Not to self: allPosts is state.allPosts and setAllPosts is a function that sets state.allPosts ... and state is an object with keys and values. State is an object that holds our data (that will change)
const Posts = () => {
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {    
            const response = await fetch (`${BASE_URL}/posts`);
            const allPostObj = await response.json();
            const allPostsList = allPostObj.data.posts;
            setAllPosts(allPostsList);
        }
        fetchPosts()
}, []);

return (
   <div>
        <div>
            <h2 id="posts"> All Posts</h2>

            
		        {
                allPosts.map((singlePost, i) => {
			    return (
                    <div id="marketPlace">
                        <ul>
                        <li key={i}> {singlePost.title}</li>
                            <ul>
                                <li key={i}> Price: {singlePost.price}</li>
                                <li key={i}> description: {singlePost.price}</li>
                                <li key={i}> Seller: {singlePost.author.username}</li>
                                <li key={i}> Location: {singlePost.location}</li>
                                <li key={i}> Post Created: {singlePost.createdAt}</li>



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

export default Posts 


