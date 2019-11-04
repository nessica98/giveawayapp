import React, { useState } from 'react';
import AddGiveawayForm from '../../addgiveForm'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddGWModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const room = props.room
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
    <div className = "d-flex justify-content-end">
      <Button  style ={{marginRight:'10%'}} color="danger" onClick={toggle}>Add</Button>
      
    </div>
    <div>
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Add Giveaway</ModalHeader>
        <ModalBody>
          <AddGiveawayForm room = {room}/>
        </ModalBody>
        
      </Modal>
    </div>
    </div>
  );
}

export default AddGWModal;