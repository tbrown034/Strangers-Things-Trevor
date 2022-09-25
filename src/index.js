//imports
import { createRoot } from 'react-dom/client';
import { Header, Posts, LogIn, Register, Profile, NewPost, UserPosts, SinglePost } from './components'



const App = () => {
	return (
		<div>
			<div> <Header/> </div>
			<div> <LogIn/> </div>
			<div> <Register/> </div>
			<div> <Profile/> </div>
			<div> <UserPosts/> </div>
			<div> <NewPost/> </div>
			<div> <SinglePost/> </div>
			<div> <Posts/> </div>
		</div>
	)}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);



