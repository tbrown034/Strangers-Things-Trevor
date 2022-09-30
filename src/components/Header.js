import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';


const Header = () => {
    return (
		<div>
    		<div id="head">
				<h1>STRANGER'S THINGS</h1>	
       		 	<nav>
				<Link to="/posts">Posts</Link> 
				<Link to="/profile">Profile</Link> 
				<Link to="/login">Log In/Log Out</Link> 
				<Link to="/register">Register</Link> 
				<Link to="/newpost">Create New Post</Link> 
				</nav>
   			 </div>
		</div>)
}


export default Header