import React from 'react';
import './Input.css';

class Input extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			value: '',
			isValid: false,
			isTouched: false
		}
	}

	validation = (value, type, length) => {
	   if(type === 'email') {
	      return /^\S+@\S+\.\S+$/.test(value);
	   } else if(type.includes('Name')) {
	   	return !/\d/.test(value)
	   } else {
	      return value.length > length;
	   }
	}

	handleTouch = () => {
		this.setState({
			isTouched: true
		})
	}

	handleInputChange = async (event) => {
		console.log(this.validation(event.target.value, this.props.id, this.props.len))
		await this.setState({
			isValid: this.validation(event.target.value, this.props.id, this.props.len),
			value: event.target.value
		})
		
		this.props.handleFormChange(this.props.id, this.state.value, this.state.isValid)
	}

	render(){
		return(
			<div className='input-component'>
				<label>{this.props.label}</label>
				<input 
					id={this.props.id} 
					type={this.props.type}
					placeholder={this.props.placeholder}
					onBlur={this.handleTouch}
					value={this.state.value}
					onChange={this.handleInputChange}
				/> 
				{this.state.isTouched && !this.state.isValid && <p>{this.props.errorText}</p>}
			</div>
		)
	}
}

export default Input

	// onChange={changeHandler}
	// onBlur={touchHandler}