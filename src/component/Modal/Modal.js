
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalBox = (props) => {
  const {
    buttonLabel,
    className, data
  } = props;
  
  const datagw = data;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(datagw)
  //const datagw = data;
  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{datagw.giveawayname}</ModalHeader>
        <ModalBody>
            <p></p>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalBox;