

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
     console.log("registerusertest token and then result", token, result);
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
     console.log("registerusertest token and then result", token, result);
     localStorage.setItem("token", token);
     localStorage.setItem("userName", userName)
     return token; 
    }

