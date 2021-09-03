import React from 'react';
import { SCard, SCardHeader, SCardBody } from '../styles';

const Card = (props)=>{

    return (
        <SCard roundEdge={props.roundEdge}>
            <SCardHeader background={props.bg_url}>{props.city}</SCardHeader>
            <SCardBody> 
                current temperature in {props.city} : {props.temp}&#8451; <img src={props.weatherIcon} alt='weather symbol'/>
            </SCardBody>
            {/* <img src={props.bg_url} /> */}
        </SCard>
    );
};

export default Card;