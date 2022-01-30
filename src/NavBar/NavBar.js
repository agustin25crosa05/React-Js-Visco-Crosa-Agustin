import React from "react";
import CardWidget from "./CardWidget";
import './NavBar.css'

const NavBar = () => {
    return(
		<div>
			<nav className="navbar">
					<ul className="navbar_topics">
					<li><CardWidget /></li>
					<li>Home</li>
					<li>Productos</li>
					<li>Consultas</li>
					<li>Promociones</li>
					<li>Contacto</li>
				</ul>
			</nav>
		</div>
    );
};


export default NavBar;
