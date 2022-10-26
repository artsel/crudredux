import "./app.css";
import {useSelector} from "react-redux";
// import ListUsers from "./components/listUsers";

import React from 'react';
import { Counter } from './features/counter/Counter';

function App() {
//	const userList = useSelector((state) => state.users.value);

	return <div className="app-crud-users">
		<div className="add-new-user">
			<input type="text" placeholder = "name..." />
			<input type="text" placeholder = "username..." />
			<button>Add new user</button>

		</div>
		<Counter />
		{/* <ListUsers /> */}
	</div>;
}

export default App;