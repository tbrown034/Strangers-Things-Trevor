import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2208-ftb-et-web-ft';


const App = () => {
	const [allPosts, setAllPosts] = useState([]);
	useEffect(() => {
		const getData = async () => {
			await fetchPosts();
		}
		getData(); 
	}, []);

	const fetchPosts = async () => {    
		const response = await fetch (`${BASE_URL}/posts`);
        const result = await response.json();
		const allPostsList = result.results;
		setAllPosts(allPostsList)
	}

	// const renderPosts = () => {
	// for (let i = 0; i < posts.length; i++) {
	// 	const newPostDiv = document.getElementById()
	// 	const postElement.append
	// 	const displayPost = posts[i]; }
	// }

	return (
		<div>
			<nav>
				<span>Stranger's Things</span>
				<span>Home </span>
				<span>Profile </span>
				<span>Log In </span>
			</nav>
			<div>
				<h2>All forms</h2>
					<ul>
						{
							allPosts.map (() => {
								return 
							}
							)
						}
					</ul>
			</div>
			<div>
				<h2>Hello Everyone</h2>
			</div>
		</div>
	)
}

///////////// Posts w/ API //////////

// const postElement = document.getElementById("posts")

/// Getting initial posts
// const fetchPosts = async () => {    
// 		const response = await fetch (`${BASE_URL}/posts`);
//         const result = await response.json()
//         console.log(result)
// 		renderPosts()
// 	}

// const renderPosts = () => {
// 	for (let i = 0; i < posts.length; i++) {
// 		const postElement.append
// 		const displayPost = posts[i];


		

// 	}
// }



const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);

///bootstrapping
fetchPosts()






