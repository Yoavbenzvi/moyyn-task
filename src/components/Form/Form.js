import React from 'react';
import Input from './Input';
import './Form.css';

const Form = () => {
	return(
		<div className='body-form'>
			<div className='center'>
				<h2>SIGN UP</h2>
			</div>
			<form className='main-form'>
				<div className='fields-form'>
					<div className='fields-name'>
						<Input 
							id='first-name'
							type='text'
							placeholder='Enter your first name'
							value=''
							label='First-Name'
						/>	
						<Input 
							id='last-name'
							type='text'
							placeholder='Enter your last name'
							value=''
							label='Last-Name'
						/>	
					</div>
					<Input 
						id='email'
						type='email'
						placeholder='Enter your email'
						value=''
						label='Email'
					/>	
					<Input 
						id='password'
						type='password'
						placeholder='Enter your last password'
						value=''
						label='Password'
					/>	
				</div>
				<button type='submit' className='submit-button'>
					Create Account
				</button>
			</form>
		</div>
	)
}

export default Form