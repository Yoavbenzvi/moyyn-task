import React from "react";
import Input from "./Input";
import Button from "./Button";
import "./Form.css";

class Form extends React.Component {
	constructor() {
		super();

		this.state = {
			formIsValid: false,
			inputs: {
				firstName: {
					isValid: false,
					value: "",
				},
				lastName: {
					isValid: false,
					value: "",
				},
				email: {
					isValid: false,
					value: "",
				},
				password: {
					isValid: false,
					value: "",
				},
			},
		};
	}

	//Method to be ran on every input change, passed down as props to children
	handleFormChange = (id, value, isValid) => {
		//Creating new inputs state with the given arguments
		const newInputs = {
			...this.state.inputs,
			[id]: {
				value,
				isValid,
			},
		};

		//Checking form validity (iterating through all inputs to check if they are valid) and determines form validity
		let newValidity = true;
		for (let input in newInputs) {
			newValidity = newValidity && newInputs[input].isValid;
		}

		//Setting form state
		this.setState({
			formIsValid: newValidity,
			inputs: newInputs,
		});
	};

	//Dummy submit method, runs a fcuntion on inputs (currently only console logs) if form is valid
	handleSubmit = () => {
		if (this.state.formIsValid) {
			console.log(this.state.inputs); //do something with the submit
		}
	};

	render() {
		return (
			<div className="body-form">
				<div className="center">
					<h2>SIGN UP</h2>
				</div>
				<form className="main-form">
					<div className="fields-form">
						<div className="fields-name">
							<Input
								id="firstName"
								type="text"
								placeholder="Enter first name"
								label="First Name"
								errorText="Please enter a valid name"
								handleFormChange={this.handleFormChange}
								len={2}
							/>
							<Input
								id="lastName"
								type="text"
								placeholder="Enter last name"
								label="Last Name"
								errorText="Please enter a valid name"
								handleFormChange={this.handleFormChange}
								len={2}
							/>
						</div>
						<Input
							id="email"
							type="email"
							placeholder="Enter your email"
							label="Email"
							errorText="Please enter a valid email address"
							handleFormChange={this.handleFormChange}
						/>
						<Input
							id="password"
							type="password"
							placeholder="Enter your last password"
							label="Password"
							errorText="Please enter a valid password (at least 6 characters)"
							handleFormChange={this.handleFormChange}
							len={6}
						/>
					</div>
					<Button
						handleClick={this.handleSubmit}
						text="Create Account"
						active={this.state.formIsValid}
					/>
				</form>
			</div>
		);
	}
}

export default Form;
