import React from 'react';
import NavButtons from './NavButtons';
import './MainNavigation.css';

const MainNavigation = () => {
	return(
		<nav className='main-navigation'>
			<div style={{color: '#265cff', fontWeight: 'bold'}}>
				Moyyn
			</div>
			<NavButtons />
		</nav>
	)
}

export default MainNavigation