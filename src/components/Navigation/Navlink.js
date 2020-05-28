import React from 'react';
import './Navlink.css';

const Navlink = ({ text, path, classNames}) => {
	return(
		<div onClick={() => console.log('click')} className={`navigation-link ${classNames}`}>
			{text}
		</div>
	)
}

export default Navlink