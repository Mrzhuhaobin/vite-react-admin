import React, { useEffect, useState } from 'react';
import { Menu, Button } from 'antd';
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '@/model/user'
import utils from '@/utils';
import { routes } from '../router';




const Aside = () => {
	const [currentPath, setPath] = useState('');
	const navigate  = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const user = useSelector(state => state.user)

	const logout = async () => {
    dispatch(setLogin({
			userName: '',
			isLogin: false
		}));
    utils.removeLoginInfo()

    navigate('/login', {replace: true})
  }

	useEffect(() => {
		setPath(location.pathname)
	}, [location])
	
  return (
		<div className='aside'>
			<div className="aside-logo" />
			<Menu theme="dark" mode="inline" selectedKeys={[currentPath]}>
				{
					routes.map(route => {
						return(
							<Menu.Item key={route.path} onClick={() => navigate(route.path)}>
								{route.title}
							</Menu.Item>
						)
					})
				}
			</Menu>
			<div className='aside-avatar'>
				<span style={{color: '#fff'}}>{user.userName}</span>
				<Button
				style={{marginLeft: '20px'}}
				type="link"
				onClick={() => logout()}
				>
					退出登录
				</Button>
			</div>
		</div>
  );
};
export default Aside