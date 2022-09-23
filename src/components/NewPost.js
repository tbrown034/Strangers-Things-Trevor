import React, { useState } from "react";
import { CreateNewPost } from "../api";


const NewPost = () => {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);
   
    const sumbitNewPost = async (event) => {
         event.preventDefault();
        const token = localStorage.getItem("token")
        const newPost = {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver
        }
        alert("Congrats! Your post has been posted!");
        const displayNewPost = await CreateNewPost(token, newPost);
        return displayNewPost
    };

    const addTitle = (event) => {
        setTitle(event.target.value)
    }

    const addDescription = (event) => {
        setdescription(event.target.value)
    }

    const addPrice = (event) => {
        setPrice(event.target.value)
    }

    const addLocation = (event) => {
        setLocation(event.target.value)
    }

    const addWillDeliver = (event) => {
        setWillDeliver(event.target.value)
    }
    
    


    return (
        <div>
            <h1>Add New Post</h1>
            <form id="newPostForm" onChange={sumbitNewPost}>
                    <label>Title:   </label>
                    <input type="text" id="titleId" name="title" onChange={addTitle} ></input><br></br>
                    <label>Description: </label>
                    <input type="text" id="descriptionId" name="description" onChange={addDescription}></input><br></br>
                    <label>Price:   </label>
                    <input type="text" id="priceId" name="price" onChange={addPrice}></input><br></br>
                    <label>Location:    </label>
                    <input type="text" id="locationId" name="location" onChange={addLocation}></input><br></br>
                    <label>Willing to Deliver?: </label>
                    <select name="willDeliver" id="deliverId" onChange={addWillDeliver}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select><br></br>
                    <button type="submit" form="newPostForm" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default NewPost 