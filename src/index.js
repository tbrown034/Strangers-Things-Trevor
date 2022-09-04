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

			</div>
		</div>
	)}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);

