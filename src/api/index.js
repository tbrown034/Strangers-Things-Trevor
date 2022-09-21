

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2208-ftb-et-web-ft'

export const fetchPosts = async () => {    
    const response = await fetch (`${BASE_URL}/posts`);
    const result = await response.json();
    const allPosts = result.data.posts;
    return allPosts;
}





    




     