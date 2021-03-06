import React from "react";
import "./Input.css";

class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
			isValid: false,
			isTouched: false,
		};
	}

	//A simple validation function, can be easily added to add/remove criteria
	//Currently has seperate checks for names, email and password
	validation = (value, type, length) => {
		if (type === "email") {
			return /^\S+@\S+\.\S+$/.test(value);
		} else if (type.includes("Name")) {
			return value.length > 0 && !/\d/.test(value);
		} else {
			return value.length >= length;
		}
	};

	//Changing state if component was touched
	handleTouch = () => {
		this.setState({
			isTouched: true,
		});
	};

	handleInputChange = async (event) => {
		//Checking field validity with the validation method
		const validity = this.validation(
			event.target.value,
			this.props.id,
			this.props.len
		);

		//Setting state
		await this.setState({
			isValid: validity,
			value: event.target.value,
		});

		//Running the callback function recieved from parent
		this.props.handleFormChange(
			this.props.id,
			this.state.value,
			this.state.isValid
		);
	};

	render() {
		return (
			<div className="input-component">
				<label>{this.props.label}</label>
				<input
					className={`${
						this.state.isTouched && !this.state.isValid && "invalid"
					}`}
					id={this.props.id}
					type={this.props.type}
					placeholder={this.props.placeholder}
					onBlur={this.handleTouch}
					value={this.state.value}
					onChange={this.handleInputChange}
				/>
				{this.state.isTouched && !this.state.isValid && (
					<p>{this.props.errorText}</p>
				)}
			</div>
		);
	}
}

export default Input;
