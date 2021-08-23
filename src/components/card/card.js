import React from 'react';
import { SCard, SCardHeader, SCardBody } from '../styles';

const Card = (props)=>{

    return (
        <SCard>
            <SCardHeader>{props.city}</SCardHeader>
            <SCardBody>{props.temp}</SCardBody>
        </SCard>
    );
};

export default Card;