import React from "react";
import "./Navlink.css";

//Navigation link component, takes dynamic pats, text and className
//Currently using a dummy function (console.log) for path

const Navlink = ({ text, path, classNames }) => {
	return (
		<div
			onClick={() => console.log(`going to ${path}`)}
			className={`navigation-link ${classNames}`}
		>
			{text}
		</div>
	);
};

export default Navlink;
