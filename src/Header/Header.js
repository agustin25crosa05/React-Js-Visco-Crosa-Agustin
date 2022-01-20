import React from 'react';
import './Header.css';
import imgPublicidad from '../img/publicidad.png';


const Header = (props) => {
    return(
		<div className='Header'>
            <h1>{props.header_title}</h1>
            <img className='publicity' src={imgPublicidad} alt='logo-app' />
		</div>
    );
};


export default Header;