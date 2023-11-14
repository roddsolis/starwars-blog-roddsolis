import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar bg-transparent color-white d-flex justify-content-center">
			<Link to="/">
				<span className="navbar-brand text-white mb-0 h1">
				<img src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-PNG-Background.png" style={{width:"20%",height:"50%",objectFit:"cover"}}></img>
				</span>
			</Link>
			
		</nav>
	);
};
