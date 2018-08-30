import React from 'react';

const Footer = () => {
    return (
        <footer>
            <small>&copy; {(new Date().getFullYear())}</small>
        </footer>
    );
}

export default Footer;