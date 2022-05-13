import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { routes } from '@/router';
import Login from '@/pages/login/index.jsx';
import ErrorPage from '@/pages/errorPage/index.jsx';
import Home from '@/pages/home/index.jsx';




function App () {

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