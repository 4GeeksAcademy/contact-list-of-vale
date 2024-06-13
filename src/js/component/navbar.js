import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="ml-auto">
				<Link to="/CreateAContact">
					<button className="btn btn-primary">Create a New Contact </button>
				</Link>
			</div>
		</nav>
	);
};
