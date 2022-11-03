import './users.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item'

export function Users() {
	const {users} = useSelector((state) => state)
	return (
		<div className="users-list">
				<ul className="list-users">
				{users.map((user) => (
				<Item 
				key={user.id}
				id={user.id}
				username={user.username}
				year={user.year}
				{...user}
				/>
				))}
				</ul>
		</div>)
		
}

export default Users