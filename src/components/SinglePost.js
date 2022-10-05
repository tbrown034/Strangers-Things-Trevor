import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts } from "../api";
import { useParams } from "react-router-dom";


const SinglePost = (_id) => {
    const [aSinglePost, setSinglePost] = useState([]);
    const params = useParams();
    const number = params._id;
    console.log("param", number ) 
    useEffect(() => {
		const displayPost = async (_id) => {
			const returnPost = await fetchPosts();
			setSinglePost(returnPost)		
        }
		displayPost()
}, []);

    return (
        <div>
            <div>
                <p>test</p>
                <p>returnPost</p>
            </div>



        <h2>Post</h2>
        {aSinglePost.map((singlePost, _id) => {
            if (number === singlePost._id)
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
        
        )}

        </div>
    )
}


export default SinglePost
