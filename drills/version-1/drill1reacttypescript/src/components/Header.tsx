import React, { FunctionComponent } from 'react';
import logo from '../g-dino.png';
export const Header: FunctionComponent = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Header;