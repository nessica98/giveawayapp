
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    dataitem
  } = props;
  console.log(dataitem)

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  if(dataitem.giveaway_status==1){
  return (
    <div>
      <Button color="info" onClick={toggle}>จอง</Button>
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>CONFIRM</ModalHeader>
        <ModalBody>
          Please Confirm
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Confirm</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
  }
  else{
    return(<div>
        <Button color="danger" >Full</Button>
      </div>);
    
  }
}

export default ModalExample;