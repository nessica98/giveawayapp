
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Accordion } from 'reactstrap';
import MyGiveawatList from '../Mygiveaway/Listboxmain'
const StatusModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  
  //const datagw = data;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  // in <ModalBody> show mygiveaways (owner) and myqueue
  return (
    <div>
      <Button color = "link" size = "sm" onClick={toggle}>Status</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Status</ModalHeader>
        <ModalBody>
            <MyGiveawatList/>
          
        </ModalBody>
        
      </Modal>
    </div>
  );
}


export default StatusModal;