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
				allPosts.map((singlePost, _id) => {
				return (
					<div key={_id}>
						<ul id="marketPlace">
						<li id="itemTitle"> {singlePost.title}</li>
							<ul>
								<li > Price: {singlePost.price}</li>
								<li> description: {singlePost.price}</li>
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
export default Posts 


