import React from "react";
import { useState, useEffect } from "react";
import { BASE_URL } from '../api'
/// allPosts is state.allPosts and setAllPosts is a function that sets state.allPosts
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
            <h2>All Posts by title</h2>
		    <ul>
		        {
                allPosts.map((singlePost, i) => {
                    console.log ("eep", singlePost, singlePost.title)
			    return <li key={i}> {singlePost.title}</li>
			    } )
		        }
		    </ul>
        </div>	
	</div> 
        )
}

export default Posts 


