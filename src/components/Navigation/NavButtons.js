import React from 'react';
import Navlink from './Navlink';
import './NavButtons.css';

const NavButtons = () => {
	return(
		<div className='navigation-buttons'>
			<Navlink text={'For companies'}></Navlink>
			<Navlink text={'For Candidates'}></Navlink>
			<Navlink text={'Register'} classNames='link-border'></Navlink>
			<Navlink text={'Login'} classNames='link-border'></Navlink>
		</div>
	)
}

export default NavButtons