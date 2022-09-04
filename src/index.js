//imports
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
		console.log("1", result)
		const allPostsList = result.data.posts;
		console.log("2", allPostsList)
		setAllPosts(allPostsList)
	}
	return (
		<div>
			<nav>
				<span>Stranger's Things</span>
				<span>Home </span>
				<span>Profile </span>
				<span>Log In </span>
			</nav>
			<div>
				<h2>All Posts</h2>
				<ul>
					{
						allPosts.map((singlePost, i) => {
							console.log("test", singlePost, typeof singlePost)
							return <li key={i}> {singlePost.title}</li>

						})
					}
				</ul>
			</div>
		</div>
	)}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);

