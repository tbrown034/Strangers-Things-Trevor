import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts } from '../api'
import { Link } from "react-router-dom";



const Posts = () => {
	const [allPosts, setAllPosts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	
	const handleChange = (event) => {
        setSearchTerm(event.target.value)};
	const handleClick = (singlePost) => {
		const singleId = singlePost._id
		console.log("click", singleId)


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
	<br></br>
	<h2 id="itemSale">Items For Sale</h2>
		<div id="searchArea">
            <form>
                <input type="search" placeholder="Search Here..." value={searchTerm}
                onChange={handleChange}
                />
            </form>
            </div>
		<div id="allposts">
			
				{
				allPosts.filter((singlePost) => {
					if (searchTerm == ""){
						return singlePost
					}
					else if (singlePost.title.toLowerCase().includes(searchTerm.toLowerCase())) {
						return singlePost
					}
				}).map((singlePost, _id) => {
				return (
					<div id="box"  key={_id } >
						<ul id="marketPlace">
						<li id="itemTitle" onClick={() =>handleClick(singlePost)}> {singlePost.title}</li>
							<ul>
								<li> Price: {singlePost.price}</li>
								<li> description: {singlePost.description}</li>
								<li> Seller: {singlePost.author.username}</li>
								<li> Location: {singlePost.location}</li>
								<li> Post Created: {singlePost.createdAt}</li>
								<Link to={`posts/${singlePost._id}`}>More info</Link>
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


