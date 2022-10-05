import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Posts, LogIn, Register, Profile, NewPost, UserPosts, SinglePost } from './components'

const App = () => {
	const [token, setToken] = useState('');
    useEffect(() => {
        logInToken()
    },[])

    const logInToken = () => {
        const priorToken = localStorage.getItem('token')
        if(priorToken && priorToken !== 'null'){
            setToken(priorToken)
        }
    }
	
	return (
		<Router>
		<div>
			<Header
                token={token}
                setToken={setToken}
                ></Header>
			<Routes>
				<Route path="/" element={[<Posts/>]} />
				<Route path="/posts" element={<Posts/>}></Route>
				<Route path="/login" element={<LogIn/>}></Route>
				<Route path="/register" element={<Register/>}></Route>
				<Route path="/profile" element={<Profile/>}></Route>
				<Route path="/userposts" element={<UserPosts/>}></Route>
				<Route path="/newpost" element={<NewPost/>}></Route>
				<Route path="posts/:_id" element={<SinglePost />}></Route>
			</Routes>
		</div>
		</Router>	
	)}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
	
		<App/>
	
);



