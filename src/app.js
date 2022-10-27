import "./app.css";
import {useSelector} from "react-redux";

import React from 'react';
import Users  from './features/users/Users';
function App() {
	return (
		<div className="app-js">
			<div className="add-new-user">
				<input type="text" placeholder = "name..." />
				<input type="text" placeholder = "username..." />
				<button>Add new user</button>
			</div>
			<div className="redux-apps">
				<div className="users-import"><Users /></div>				
			</div>
		</div>
	);
}

export default App;