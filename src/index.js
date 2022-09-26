//imports
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Header, Posts, LogIn, Register, Profile, NewPost, UserPosts, SinglePost } from './components'



const App = () => {
	return (
		<div>
			<div> <Header/> </div>
			<Routes>
			<Route path="/" element={<Posts/>}></Route>
				<Route path="/login" element={<LogIn/>}></Route>
				<Route path="/register" element={<Register/>}></Route>
				<Route path="/profile" element={<Profile/>}></Route>
				<Route path="/userPosts" element={<UserPosts/>}></Route>
				<Route path="/newpost" element={<NewPost/>}></Route>
				<Route path="/singlepost" element={<SinglePost/>}></Route>

			</Routes>
		</div>
	)}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
	<Router>
		<App/>
	</Router>
);



