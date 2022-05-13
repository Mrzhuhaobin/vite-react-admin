import React, { lazy, Suspense } from "react";
import { Tabs } from 'antd';

const { TabPane } = Tabs;


function Index () {
	const tabList = [
		{
			tabName: 'tab 1',
			id: 1,
			component: lazy(() => import('./components/List.jsx'))
		},
		{
			tabName: 'tab 2',
			id: 2,
			component: lazy(() => import('./components/About.jsx'))
		},
	]
	
	// 测试异步组件
	
	const Loading = () => <div>loading····</div>
	return (
		<div className="page dashboard">
			<Tabs defaultActiveKey={1} >
				{
					tabList.map(item => {
						return (
							<TabPane tab={item.tabName} key={item.id}>
								<Suspense fallback={<Loading/>}>
									<item.component/>
								</Suspense>
							</TabPane>
						)
					})
				}
			</Tabs>
		</div>
	)
}

export default Index