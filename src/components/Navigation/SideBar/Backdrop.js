import React from "react";
import ReactDOM from "react-dom";
import "./Backdrop.css";

//backdrop component to change background for sidebar
//Using portals to handle layer height

const Backdrop = (props) => {
	return ReactDOM.createPortal(
		<div className="backdrop fade-in" onClick={props.onClick}></div>,
		document.getElementById("backdrop-hook")
	);
};

export default Backdrop;
