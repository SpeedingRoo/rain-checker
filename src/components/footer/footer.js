import React from 'react';
import { SFooter } from '../styles';

const Footer = () => {
    return (
    <SFooter>
        Copyright Reserved, WANGDOM Pty Ltd . {new Date().getFullYear()}
    </SFooter>
    )
}

export default Footer;