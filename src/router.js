import About from '@/pages/about/index.jsx';
import Config from '@/pages/config/index.jsx';
import DashBoard from '@/pages/dashBoard/index.jsx';

export const routes = [
	{
		id: 0,
		path: '/',
		component: DashBoard,
		title: '首页'
	},
	{
		id: 1,
		path: '/config',
		component: Config,
		title: '配置页',
	},
	{
		id: 2,
		path: '/about',
		component: About,
		title: '关于'
	}
]