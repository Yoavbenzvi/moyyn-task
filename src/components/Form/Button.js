import React from "react";
import "./Button.css";

//Dynamic button components, text, action (function) and style are determined by parent component

const Button = ({ text, active, handleClick }) => {
	return (
		<div
			onClick={handleClick}
			className={`button-${(!active && "disabled") || "default"}`}
		>
			{text}
		</div>
	);
};

export default Button;
