import React, { useEffect } from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <p>&copy; Copyrights preserved {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;