import React from 'react';
import './Input.css';

const Input = ({id, type, placeholder, value, label, errorText}) => {
	return(
		<div className='input-component'>
			<label>{label}</label>
			<input 
				id={id} 
				type={type}
				placeholder={placeholder}
				value={value}
			/> 
			{errorText && <div>Please enter a valid {id}</div>}
		</div>
	)
}

export default Input

	// onChange={changeHandler}
	// onBlur={touchHandler}