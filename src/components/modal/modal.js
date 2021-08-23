import React from 'react';
import { useState } from 'react';
import { SModal } from '../styles.js'
const Modal = (props)=>{

    // const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(props.shown);

    const closeModal = () => {

        setShowModal(false);
    }

    return(
        <SModal displayModal={showModal}>
            <div>
                <div>{props.message}</div>
                <div>showModal is {showModal ? 'true' : 'false'}</div>
                <button type='button' onClick={closeModal}>Close and Go Back</button>
            </div>
        </SModal>
    )
}

export default Modal;