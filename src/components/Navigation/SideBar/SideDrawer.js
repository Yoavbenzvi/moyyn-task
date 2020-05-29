import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";

const SideDrawer = ({ handleClick, children }) => {
	const content = (
		<aside className="side-drawer" onClick={handleClick}>
			{children}
		</aside>
	);

	return ReactDOM.createPortal(
		content,
		document.getElementById("drawer-hook")
	);
};

export default SideDrawer;
