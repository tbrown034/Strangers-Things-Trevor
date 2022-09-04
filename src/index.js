//imports
import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import { Header } from './components'
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
		const allPostsList = result.data.posts;
		setAllPosts(allPostsList)
	}
	
	return (
		<div>
			<div> <Header/> </div>
			<div>
				<h2>All Posts by title</h2>
				<ul>
					{
						allPosts.map((singlePost, i) => {
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

