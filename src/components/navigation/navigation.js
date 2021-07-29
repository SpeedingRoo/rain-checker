import React from 'react';
import { SList, SListItem } from '../styles';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <SList>
            <SListItem><Link to='/'>Home</Link></SListItem>
            <SListItem><Link to='/about'>About</Link></SListItem>
            <SListItem><Link to='/projects'>Projects</Link></SListItem>
            <SListItem><Link to='/contact'>Contact Me</Link></SListItem>
        </SList>
    )
};

export default Navigation;