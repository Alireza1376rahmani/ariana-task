import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<div className="navbar">
				<nav className="element">
					<Link to="/form">Form</Link>
				</nav>
				<nav className="element">
					<Link to="/chart">Chart</Link>
				</nav>
			</div>
		</div>
	);
}

export default Header;
