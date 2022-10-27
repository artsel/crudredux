import React from "react";

export function Item({id, username}){
	const itemStyle = {
		padding: '5px',
		listStyle: 'none',
		backgroundColor: '#D7Cc80',
		width: '250px'
	}
	
return (
	<li style={itemStyle} >
		{id}: {username}
	</li>
	)
}
export default Item;