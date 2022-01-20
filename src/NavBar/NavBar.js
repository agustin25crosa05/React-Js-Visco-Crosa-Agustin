import React from "react";
import './NavBar.css'
import img from '../img/logo.png';

const NavBar = (props) => {
    return(
		<div className="navbar">
					<ul className="navbar_topics">
						<li>Home</li>
						<li>Productos</li>
						<li>Consultas</li>
						<li>Promociones</li>
						<li>Contacto</li>
						<img className='logo' src={img} alt='logo-app' />
					</ul>
		</div>
    );
};


export default NavBar;
