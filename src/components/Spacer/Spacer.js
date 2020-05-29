import React from "react";
import Svg from './Svg';
import "./Spacer.css";

const Spacer = () => {
	return (
		<div className="spacer-main">
			<div className="spacer-left">
				<Svg className="svg" width={400} height={400} />
			</div>
			<div className="spacer-right">Let your dream job find you</div>
		</div>
	);
};

export default Spacer;
