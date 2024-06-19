import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => (
	<div className="text-center mt-5 ">
		
		<Link to="/ContactList" className="btn btn-success">
			ContactList
		</Link>
	</div>
);

