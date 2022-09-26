import React from "react";
import { useState, useEffect } from "react";
import { fetchSinglePost } from "../api";

const SinglePost = () => {
    const [aSinglePost, setSinglePost] = useState([]);
    useEffect(() => {
		const displayPost = async () => {
			const returnPost = await fetchSinglePost();
			setSinglePost(returnPost)
		}
		displayPost()
}, []);

    return (
        <div>
        <h2>Post</h2>
        {aSinglePost.title ? aSinglePost.map((singlePost, _id) => {
            return (
                <div key={_id}>
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
        }
        
        ) : null }

        </div>
    )
}


export default SinglePost
