import React, { useState } from "react";
import NavButtons from "./NavButtons";
import Backdrop from "./SideBar/Backdrop";
import SideDrawer from "./SideBar/SideDrawer";
import "./MainNavigation.css";

const MainNavigation = () => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const changeDrawerState = () => {
		drawerIsOpen ? setDrawerIsOpen(false) : setDrawerIsOpen(true);
	};

	return (
		<nav className="main-navigation">
			<a href="https://moyyn.com/" className="logo">
				Moyyn
			</a>
			<NavButtons className="navigation-buttons-main" />
			<button onClick={changeDrawerState} className="hamburger-button">
				<span />
				<span />
				<span />
			</button>
			{drawerIsOpen && <Backdrop onClick={changeDrawerState} />}
			{drawerIsOpen && (
				<SideDrawer handleClick={setDrawerIsOpen}>
					<NavButtons className="navigation-buttons-side" />
				</SideDrawer>
			)}
		</nav>
	);
};

export default MainNavigation;
