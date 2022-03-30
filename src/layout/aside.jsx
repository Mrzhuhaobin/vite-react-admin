import React, { useEffect, useState } from 'react';
import { Menu, Avatar, Button } from 'antd';
import { UserOutlined, LoginOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from "react-router-dom";
import { routes } from '../router';




const Aside = () => {
	const [currentPath, setPath] = useState('');
	const navigate  = useNavigate();
	const location = useLocation();
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
				<Avatar size={64} icon={<UserOutlined />} />
				<Button
				style={{marginLeft: '40px'}}
				shape='circle'
				icon={<LoginOutlined rotate={90} />}
				onClick={() => navigate('/login')}
				>
				</Button>
			</div>
		</div>
  );
};
export default Aside