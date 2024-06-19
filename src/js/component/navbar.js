import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-warning mb-3 d-flex justify-content-between p-3">
			<h1 className='fw-bold font-monospace'> Miss.Sherman Contact List</h1>
			<div className="ml-auto">
				<Link className="" to="/CreateAContact">
					<button className="btn btn-dark">Create a New Contact </button>
				</Link>
			</div>
		</nav>
	);
};
