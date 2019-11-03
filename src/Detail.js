import React, { Component, useState } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Button, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input  } from 'reactstrap';
import './Detail.css';
import Jong from './Jongmodal'
//import { super } from '@babel/types';

class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal : false,
      detail : ''
    };
  }

  toggle = () => this.setState({modal : !this.state.modal,
                                detail : ''})

  addstatus = () => {console.log("detail: " + this.state.detail);
                    this.setState({modal : !this.state.modal});
                    window.location.reload(true);
  }

  onChangeText = changeEvent => this.setState({ [changeEvent.target.name] : changeEvent.target.value });
  
  render() {

    const datagw = this.props.data
    console.log(datagw)
    console.log()

    return (
  
        <div className="App">
          <div className="App__Aside">
          <div className = "aaa">
            <ListGroup >
                <ul>
                <li><ListGroupItem>ชื่อของ : {datagw.giveawayname} </ListGroupItem></li>
                <li><ListGroupItem>แจกโดย : {datagw.giveaway_givername}</ListGroupItem></li>

                <li><ListGroupItem>สถานที่ : {datagw.giveaway_place}</ListGroupItem></li>
                <li><ListGroupItem>วันเวลา : {datagw.giveaway_date}</ListGroupItem></li>
                <li><ListGroupItem>จำนวนของที่เหลือ : <Badge pill>{datagw.giveaway_amount}</Badge></ListGroupItem></li>
<<<<<<< HEAD
                {/*<li><Status /></li>*/}
=======
>>>>>>> upstream/master

                
                <li>
                  <Col>
                    <Row>
                      <Jong dataitem = {datagw} />

                      <Button className = "btn btn-info Addstatus"  onClick={this.toggle}>Add Status</Button>

                    </Row>
                  </Col>
                </li>

                <li>From Giver : </li>
                <li><ListGroup color = "warning">{datagw.giveaway_useranouce}</ListGroup></li>
                </ul>
            </ListGroup>
          </div>

          
          
          
          </div>
          <div className="App__Form">
           
          </div>
        

          <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} >
              <ModalHeader toggle={this.toggle}>Add Status</ModalHeader>
              <ModalBody>
              <FormGroup>
                <Label>Status</Label>
                <Input type="textarea" rows = '4' name="detail" placeholder="Detail" value = {this.state.detail}  onChange = {this.onChangeText}/>
              </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.addstatus}>Submit</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>


        </div>
      
    
    );
  }
}

export default Detail;