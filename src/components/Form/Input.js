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

	handleTouch = () => {
		this.setState({
			isTouched: true
		})
	}

	handleInputChange = async (event) => {
		await this.setState({
			isValid: true, //TO CHANGE!!!!!!!!
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
				{this.state.isTouched && <p>{this.props.errorText}</p>}
			</div>
		)
	}
}

export default Input

	// onChange={changeHandler}
	// onBlur={touchHandler}