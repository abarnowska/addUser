import classes from "./UsersList.module.css";

const UsersList = props => {
	return (
		<ul className={classes.ulList}>
			{props.users.map(item => (
				<li key={Math.random().toString()}>
					{item.name} ({item.age} years old)
				</li>
			))}
		</ul>
	);
};

export default UsersList;
