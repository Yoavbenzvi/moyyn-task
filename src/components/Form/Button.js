import React from "react";
import "./Button.css";

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
