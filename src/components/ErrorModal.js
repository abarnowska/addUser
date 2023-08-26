import Button from "./UI/Button.js";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
	return (
		<div>
			<div className={classes.background} onClick={props.onCloseHandler}></div>
			<div className={classes.errorModal}>
				<h2>{props.title}</h2>
				<p>{props.message}</p>
				<Button onClick={props.onCloseHandler}>close</Button>
			</div>
		</div>
	);
};

export default ErrorModal;
