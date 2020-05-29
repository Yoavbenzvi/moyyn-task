import React, { useState } from 'react';
import Navlink from './Navlink';
import Backdrop from './SideBar/Backdrop';
import './NavButtons.css';

const NavButtons = () => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const changeDrawerState = () => {
		drawerIsOpen ? setDrawerIsOpen(false) : setDrawerIsOpen(true);
	}

	return(
		<React.Fragment>
			{drawerIsOpen && <Backdrop onClick={changeDrawerState} />}
			<div className='navigation-buttons'>
				<Navlink text={'About'}></Navlink>
				<Navlink text={'Contact'}></Navlink>
				<Navlink text={'Register'} classNames='link-border'></Navlink>
				<Navlink text={'Login'} classNames='link-border'></Navlink>
			</div>
			<button onClick={changeDrawerState} className="hamburger-button">
				<span />
				<span />
				<span />
			</button>
		</React.Fragment>
	)
}

export default NavButtons