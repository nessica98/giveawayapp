
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
//import LoginForm from '../login-form/Login'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from '../login-form/Login';

const ModalBox = (props) => {
  const {
    isOpen,
    buttonLabel,
    className
  } = props;
  
  const [modal, setModal] = useState(isOpen);

  const toggle = () => setModal(!modal);
  //const datagw = data;
  return (
    <div>
      <button onClick = {toggle} className="btn btn-link">LOGIN</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
            <LoginForm/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalBox;