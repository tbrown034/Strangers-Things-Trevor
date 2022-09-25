export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2208-ftb-et-web-ft'

export const fetchPosts = async () => {    
    const response = await fetch (`${BASE_URL}/posts`);
    const result = await response.json();
    const allPosts = result.data.posts;
    return allPosts;
}

export const registerUser = async (userName, userPass) => {
  const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: userName,
          password: userPass
        }
      })
    });
   const result = await response.json();
   const token = result.data.token;
   localStorage.setItem("token", token);
   localStorage.setItem("userName", userName)
   return result; 
  }

export const loginUser = async (userName, userPass) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: userName,
            password: userPass
          }
        })
      });
     const result = await response.json();
     const token = result.data.token;

     localStorage.setItem("token", token);
     localStorage.setItem("userName", userName)
     return token; 
    }

export const getUserInfo = async (token) => {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },})
  const result = await response.json();
  const userProfile = result;
  return userProfile;}


export const CreateNewPost = async (token, addNewPost) => {
   const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: addNewPost,
      }),
    });
    const result = await response.json();
    const newPost = result.data.post;
    console.log("new post", newPost)
    return newPost;
  }
