import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 px-3 text-center">
		<Link to="/">
				<span className="navbar-brand mb-0 h1 d-flex justify-context-start"> or get back to contacts  </span>
			</Link>
		<p>
			Made with <i className="fa fa-heart text-secondary" /> by Vale
		</p>
	</footer>
);
