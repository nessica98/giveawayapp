
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Detail from '../../Detail';

const ModalBox = (props) => {
  const {
    buttonLabel,
    className, data
  } = props;
  
  console.log(props)
  const datagw = props.data;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(datagw)
  //const datagw = data;
  return (
    <div>
      <Button className = "btn btn-info" onClick={toggle}>{buttonLabel}</Button>
      <Modal size = "lg" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{datagw.giveawayname}</ModalHeader>
        <ModalBody>
            <Detail data = {datagw}/>
            
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