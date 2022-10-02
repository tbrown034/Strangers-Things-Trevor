import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogIn from "./LogIn";


const Header = ({token, setToken}) => {
	const [isLoggedin, setIsLoggedin] = useState(false);

	const logout = () => {
		setToken('')
        localStorage.removeItem('token')
		localStorage.removeItem('userName')
		setIsLoggedin(false);

	}
	return (
		<div id="headStyle">
			<div>
		  <Link id="headTitle" to="/">Sranger's Things</Link>
		</div>
			{ token ? (
			<div>
				<nav id="loginNav">
					<Link to="/profile">Profile</Link> 
					<Link to="/profile">Profile</Link> 
		  			<Link to="/posts">See All Posts</Link> 
					  <Link to="/userposts">See Your Posts</Link> 
		  			<Link to="/newpost">Create New Post</Link> 
		  			<button onClick={logout}>Log Out</button>
			  	</nav>
			</div>
		  ) : (
			<nav id="notLoginNav">
				<Link id="register" to="/register">Register Here</Link> 
				<Link to="/posts">See All Posts</Link> 
				<LogIn setToken={setToken}> </LogIn>
			</nav>
		  )}
		</div>
	  );
	}

	export default Header;