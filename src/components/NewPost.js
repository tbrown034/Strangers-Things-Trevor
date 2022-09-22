import React from "react";
const NewPost = () => {

     
    const handleSubmit = async (event) => {
        event.preventDefault();


        const data = await callApi({
            url: `/posts`,
            method: 'POST',
            body:{
                post: {
                  title: title,
                  description: description,
                  price: price,
                  location: location,
                  willDeliver: willDeliver,
                }
            }, 
              token
        });
    

            history.push('/posts');
            window.location.reload()
        console.log(data)
    };
    


    return (
        <div>
            <h1>Add New Post</h1>
            <form id="newPostForm" onSubmit={handleSubmit}>
                    <label>Title:   </label>
                    <input type="text" id="titleId" name="titleId" value=""></input><br></br>
                    <label>Description: </label>
                    <input type="text" id="descriptionId" name="descriptionId" value=""></input><br></br>
                    <label>Price:   </label>
                    <input type="text" id="priceId" name="priceID "value=""></input><br></br>
                    <label>Location:    </label>
                    <input type="text" id="locationId" name="locationId" value=""></input><br></br>
                    <label for="deliverId">Willing to Deliver?: </label>
                    <select name="deliverId" id="deliverId">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select><br></br>
                    <button type="submit" form="newPostForm" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default NewPost 