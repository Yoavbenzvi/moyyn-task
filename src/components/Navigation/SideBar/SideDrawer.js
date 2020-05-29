import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";

//sidbar component with a dynamic "release" action
//Takes in children dynamically and can be re-used
//Using portals to handle layer height

const SideDrawer = ({ handleClick, children }) => {
	const content = (
		<aside className="side-drawer fade-in" onClick={handleClick}>
			{children}
		</aside>
	);

	return ReactDOM.createPortal(
		content,
		document.getElementById("drawer-hook")
	);
};

export default SideDrawer;
