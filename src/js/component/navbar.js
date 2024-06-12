import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">regresa a la principal </span>
			</Link>
			<div className="ml-auto">
				<Link to="/CreateAContact">
					<button className="btn btn-primary">Create a New Contact </button>
				</Link>
			</div>
		</nav>
	);
};
