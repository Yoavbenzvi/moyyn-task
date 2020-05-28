import React from 'react';
import NavButtons from './NavButtons';
import './MainNavigation.css';

const MainNavigation = () => {
	return(
		<nav className='main-navigation'>
			<a href='https://moyyn.com/' className='logo'>
				Moyyn
			</a>
			<NavButtons />
		</nav>
	)
}

export default MainNavigation