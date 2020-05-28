import React from 'react';
import Input from './Input';
import Button from './Button';
import './Form.css';

class Form extends React.Component {
	constructor() {
		super()

		this.state ={
			formIsValid: false,
			inputs: {
				firstName: {
					isValid: false,
					value: ''
				},
				lastName: {
					isValid: false,
					value: ''
				},
				email: {
					isValid: false,
					value: ''
				},
				password: {
					isValid: false,
					value: ''
				}
			}
		}
	}

	handleFormChange = (id, value, isValid) => {
		const newInputs = {
			...this.state.inputs,
			[id]: {
				value,
				isValid
			}
		}

		let newValidity = true;
		for(let input in newInputs) {
			newValidity = newValidity && newInputs[input].isValid;
		}

		this.setState({
			formIsValid: newValidity,
			inputs: newInputs
		})
	}

	handleSubmit = () => {
		if(this.state.formIsValid) {
			console.log('submit') //do something with the submit
		}
	}

	render() {
		return(
			<div className='body-form'>
				<div className='center'>
					<h2>SIGN UP</h2>
				</div>
				<form className='main-form'>
					<div className='fields-form'>
						<div className='fields-name'>
							<Input 
								id='firstName'
								type='text'
								placeholder='Enter your first name'
								label='First Name'
								errorText='Please enter a valid name'
								handleFormChange={this.handleFormChange}
								len={2}
							/>	
							<Input 
								id='lastName'
								type='text'
								placeholder='Enter your last name'
								label='Last Name'
								errorText='Please enter a valid name'
								handleFormChange={this.handleFormChange}
								len={2}
							/>	
						</div>
						<Input 
							id='email'
							type='email'
							placeholder='Enter your email'
							label='Email'
							errorText='Please enter a valid email address'
							handleFormChange={this.handleFormChange}
						/>	
						<Input 
							id='password'
							type='password'
							placeholder='Enter your last password'
							label='Password'
							errorText='Please enter a valid password (at least 6 characters)'
							handleFormChange={this.handleFormChange}
							len={6}
						/>	
					</div>
					<Button 
						handleClick={this.handleSubmit}
						text='Create Account' 
						active={this.state.formIsValid} 
					/>
				</form>
			</div>
		)
	}
}

export default Form