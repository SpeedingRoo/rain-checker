import React from 'react';
import { SFooter } from '../styles';

const Footer = () => {
    return (
    <SFooter>
        copyright reserved, WANGDOM pty ltd . {new Date().getFullYear()}
    </SFooter>
    )
}

export default Footer;