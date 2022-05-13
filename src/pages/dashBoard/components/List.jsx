import React, { useState, useEffect } from "react";
import request from "@/service/request";
import { Skeleton } from 'antd';
import './List.scss'

function Index () {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getList = async () => {
    setLoading(true);
		const res = await request({
			url: '/api/list',
			method: 'post',
			data: {
				str: '123'
			}
		});
		console.log(1111, res)
		setList(res.list);
    setLoading(false);
	}
	useEffect(() => {
		getList()
	}, []);
  return (
    <Skeleton loading={loading} active paragraph={{rows: 3}}>
      {
        list.map(item => {
          return (
            <div className="list-item" key={item.id}>{item.name}</div>
          )
        })
      }
    </Skeleton>
  )
}

export default Index