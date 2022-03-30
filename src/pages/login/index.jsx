import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate, useLocation } from "react-router-dom";
import './index.scss';

function Index (props) {
	const navigate = useNavigate()
	useEffect(() => {
		console.log(123)
	}, [])
	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};
	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};
	const onFinish = (values) => {
    console.log('Success:', values);
		navigate('/')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
	return (
		<div className="container-y login-page">
			<h1>仓库管理平台</h1>
			<div className="flex-center form-wrap">
				<Form
				size="large"
				name="basic"
				style={{width: "80%"}}
				{...layout}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				>
					<Form.Item
						label="用户名："
						name="username"
						rules={[
							{
								required: true,
								message: '请输入用户名！',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="密码："
						name="password"
						rules={[
							{
								required: true,
								message: '请输入密码！',
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="remember"
						valuePropName="checked"
						{...tailLayout}
					>
						<Checkbox>记住密码</Checkbox>
					</Form.Item>

					<Form.Item
					{...tailLayout}
					>
						<Button style={{width: "100%"}} type="primary" htmlType="submit">
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>

	)
}

export default Index