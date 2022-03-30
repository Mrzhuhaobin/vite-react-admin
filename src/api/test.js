import request from "../service/request";

export const getIsLogin = (params) => {
	return request({
		url: '/api/islogin',
		method: 'post',
		params
	})
}