import React from 'react';
import NavButtons from './NavButtons';
import './MainNavigation.css';

const MainNavigation = () => {
	return(
		<nav className='main-navigation'>
			<div>
				Moyyn
			</div>
			<NavButtons />
		</nav>
	)
}

export default MainNavigation