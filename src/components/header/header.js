import React from 'react';
import { SHeader, SH1 } from '../styles';

const Header = () => {
    return (
        <SHeader font='zefani'>
            <SH1 ems='4' shadow={true}>THE RAIN CHECKER</SH1>
        </SHeader>
    );
};

export default Header;