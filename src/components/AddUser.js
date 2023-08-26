import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "./UI/Button";
import ErrorModal from "./ErrorModal";

const AddUser = props => {
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const inputNameHandler = event => {
		setEnteredUserName(event.target.value);
	};

	const inputAgeHandler = event => {
		setEnteredAge(event.target.value);
	};

	const submitHandler = event => {
		event.preventDefault();

		if (enteredUserName.length === 0 || enteredAge.length === 0) {
			setError({
				title: "Something went wrong",
				message: "Please enter correct name and age.",
			});
			return;
		}

		if (enteredAge < 0) {
			setError({ title: "Incorrect age!", message: "Age must be > 0." });
			return;
		}

		props.onSaveUserData(enteredUserName, enteredAge);

		setEnteredUserName("");
		setEnteredAge("");
	};

	const onCloseError = () => {
		setError(null);
	};

	return (
		<div className={classes.wrapper}>
			{error && <ErrorModal title={error.title} message={error.message} onCloseHandler={onCloseError} />}
			<form onSubmit={submitHandler} className={classes.form}>
				<label htmlFor='userInput'>Username</label>
				<input
					id='userInput'
					type='text'
					onChange={inputNameHandler}
					value={enteredUserName}></input>
				<label htmlFor='userAge'>Age (Years)</label>
				<input
					id='userAge'
					type='number'
					onChange={inputAgeHandler}
					value={enteredAge}></input>
				<Button type='submit' onClick={submitHandler}>
					Add user
				</Button>
			</form>
		</div>
	);
};

export default AddUser;
