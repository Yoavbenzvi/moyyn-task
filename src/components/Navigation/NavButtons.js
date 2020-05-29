import React from "react";
import Navlink from "./Navlink";
import "./NavButtons.css";

const NavButtons = ({ className }) => {
	return (
		<div className={className}>
			<Navlink text={"About"}></Navlink>
			<Navlink text={"Contact"}></Navlink>
			<Navlink text={"Register"} classNames="link-border"></Navlink>
			<Navlink text={"Login"} classNames="link-border"></Navlink>
		</div>
	);
};

export default NavButtons;
