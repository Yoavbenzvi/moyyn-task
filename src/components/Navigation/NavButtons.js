import React from "react";
import Navlink from "./Navlink";
import "./NavButtons.css";

//Component serves as child in MainNavigation and SideBar, hence taking dynamic styling

const NavButtons = ({ className }) => {
	return (
		<div className={className}>
			<Navlink path={"/About"} text={"About"}></Navlink>
			<Navlink path={"/Contact"} text={"Contact"}></Navlink>
			<Navlink
				path={"/Register"}
				text={"Register"}
				classNames="link-border"
			></Navlink>
			<Navlink
				path={"/Login"}
				text={"Login"}
				classNames="link-border"
			></Navlink>
		</div>
	);
};

export default NavButtons;
