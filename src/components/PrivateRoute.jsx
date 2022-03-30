import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from '@/pages/home/index.jsx';
import Login from '@/pages/login/index.jsx';

function Index (props) {
	const isLogin = useSelector(state => state.user.isLogin)
	
	return (
		<>
		{ isLogin ? 
			(
				<Route path="/" element={<Home/>}>
					{
						props.children
					}
				</Route>
			) : 
			(
				<Route path="/login" element={<Login/>}></Route>
			)
		}
		</>
	)
}

export default Index