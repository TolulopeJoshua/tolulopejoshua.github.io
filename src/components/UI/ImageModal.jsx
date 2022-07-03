import React from 'react';
import ReactDOM from 'react-dom';
import {AiOutlineClose} from 'react-icons/ai'

import './ImageModal.css';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <>
        <img className='modal' src={props.image} alt="me" />
        <AiOutlineClose className='modal-button' onClick={props.onClose}/>
    </>
  );
};

const ImageModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} image={props.image}/>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ImageModal;