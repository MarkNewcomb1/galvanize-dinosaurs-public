import React from 'react';
import logo from '../assets/g-dino.png';
const Header = (scooby) => {    
    return (
    <header>
        <img src={logo} alt="logo" onClick={scooby.clowns} />
    </header> 
    );
}

export default Header;