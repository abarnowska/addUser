/*

You can structure the app however you want but I'll build & use components with the following names:

AddUser

UsersList

Button

Card

ErrorModal

Button and Card will essentially be "wrapper components"

Take a look at the CSS files I'll use to get some hints regarding the JSX code I might be using in those components

Don't forget to "lift state up" */

import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
	const [usersListData, setUsersListData] = useState([]);

	const saveUsersDataHandler = (uName, uAge) => {
		setUsersListData(prevUsersList => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	return (
		<div className="mainDiv">
			<h1>add a new user</h1>
			<AddUser onSaveUserData={saveUsersDataHandler} />
			<UsersList users={usersListData} />
		</div>
	);
}

export default App;
