import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Index () {
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.user.isLogin)

  useEffect(() => {
    if (!isLogin) {
			navigate('/login', { replace: true})
		}
  }, [isLogin])
  return <></>
}

export default Index