import React, { useEffect, useState } from "react";
import request from "@/service/request";
import List from './components/List.jsx'

function Index (props) {
	const [list, setList] = useState([])
	const getList = async () => {
		const res = await request({
			url: '/api/list',
			method: 'post'
		});
		console.log(1111, res)
		setList(res.list)
	}
	useEffect(() => {
		getList()
	}, [])
	return (
		<div className="page dashboard">
			首页

			<ul>
				<List list={list}/>
			</ul>
		</div>

	)
}

export default Index