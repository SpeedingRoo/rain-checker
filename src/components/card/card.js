import React from 'react';
import { SCardHeader, SCardBody } from '../styles';

const Card = (props)=>{

    return (
        <div>
            <SCardHeader>{props.city}</SCardHeader>
            <SCardBody>{props.temp}</SCardBody>
        </div>
    );
};

export default Card;