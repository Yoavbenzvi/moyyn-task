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
				<Input />	
				<Input />	
				<Input />	
				<Input />	
				<button type='submit' className='submit-button'>
					Create Account
				</button>
			</form>
		</div>
	)
}

export default Form