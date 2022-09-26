import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';


const Header = () => {
    return (
    <header className="header">
        <nav>
				<Link to="/posts">Home</Link> 
				<Link to="/profile">Profile</Link> 
				<Link to="/login">LogIn</Link> 
				<Link to="/register">Register</Link> 
				<Link to="/newpost">Create New Post</Link> 
				{/* <span>Log In </span> */}
			</nav>
		<h1 id="title">STRANGER'S THINGS</h1>	
    </header>)
}


export default Header