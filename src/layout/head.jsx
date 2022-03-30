import React from "react";
import { Button } from 'antd'

function Head (props) {

	return (
		<>
			<Button icon={props.icon} onClick={props.toggle}></Button>
		</>
	)
}

export default Head