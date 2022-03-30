import axios from "axios";
import { message as Message } from "antd";
import { useNavigate } from "react-router-dom";

const request = axios.create({
	baseURL: '',
	timeout: 1000 * 20,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
  	'Accept': 'application/json',
	}
})
// const navigate = useNavigate();
function addToken (config) {
	const token = sessionStorage.getItem('token')
	if (token) {
	 config.headers.token = token
	}
	return config
 }
 function removeToken () {
	sessionStorage.removeItem('token');
	const navigate = useNavigate();
	navigate('/login');
 }

request.interceptors.request.use(
	config => {
		return addToken(config)
	},
	error => {
		return Promise.reject(error)
	}
)

request.interceptors.response.use(
	res => {
		const { success, code, message, data } = res.data // 将需要的数据和报错信息拆分开
		if (success) {
			return data
		}
		if (code !== '0000') {
			Message.error(message)
		}
		if (code === '0001') { // token过期，跳转登录页，移除token
			removeToken();
		}
		return Promise.reject(message || data || code)
	}
)


export default request