import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts, BASE_URL } from '../api'


const Posts = () => {
	const [allPosts, setAllPosts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const handleChange = (event) => {
        setSearchTerm(event.target.value)};
	const handleClick = (singlePost) => {
		const postId = singlePost._id;
		const URL = (`${BASE_URL}/posts/${postId}`)
		console.log ("name", URL)

	}


	useEffect(() => {
		const displayPosts = async () => {
			const returnPosts = await fetchPosts();
			setAllPosts(returnPosts)
		}
		displayPosts()
}, []);
return (
   <div>
		<div className="SearchInput">
            <h1>Search</h1>
            <form>
                <input type="search" placeholder="Search Here..." value={searchTerm}
                onChange={handleChange}
                />
            </form>
            </div>
		<div className="allposts">
			<h2> All Posts</h2>
				{
				allPosts.filter((singlePost) => {
					if (searchTerm == ""){
						return singlePost
					}
					else if (singlePost.title.toLowerCase().includes(searchTerm.toLowerCase())) {
						return singlePost
					}
					console.log(singlePost)
				}).map((singlePost, _id) => {
				return (
					<div key={_id } onClick={() => handleClick(singlePost)}>
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
export default Posts 


