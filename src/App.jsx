import React, { useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import PrivateRoute from '@/components/PrivateRoute.jsx';
import { routes } from '@/router';
import Login from '@/pages/login/index.jsx';
import ErrorPage from '@/pages/errorPage/index.jsx';
import Home from '@/pages/home/index.jsx';




function App () {
  const isLogin = useSelector(state => state.user.isLogin);
	return (
		<Routes>
      <Route path="/" element={<Home/>}>
				{
					routes.map(route => {
						return (
							<Route key={route.id} path={route.path} element={<route.component/>} />
						)
					})
				}
        <Route path="*" element={<ErrorPage/>} />
      </Route>
			<Route path="/login" element={<Login/>}></Route>
			
		</Routes>
	)
}

export default App