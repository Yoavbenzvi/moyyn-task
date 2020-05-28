import React from 'react';
import Input from './Input';
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
		console.log(id, value, isValid)
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
								label='First-Name'
								errorText='Please enter a valid'
								handleFormChange={this.handleFormChange}
							/>	
							<Input 
								id='lastName'
								type='text'
								placeholder='Enter your last name'
								label='Last-Name'
								errorText='Please enter a valid'
								handleFormChange={this.handleFormChange}
							/>	
						</div>
						<Input 
							id='email'
							type='email'
							placeholder='Enter your email'
							label='Email'
							errorText='Please enter a valid'
							handleFormChange={this.handleFormChange}
						/>	
						<Input 
							id='password'
							type='password'
							placeholder='Enter your last password'
							label='Password'
							errorText='Please enter a valid'
							handleFormChange={this.handleFormChange}
						/>	
					</div>
					<button type='submit' className='submit-button'>
						Create Account
					</button>
				</form>
			</div>
		)
	}
}

export default Form