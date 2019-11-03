import React, { Component, useState } from 'react';
//import './Listbox.css';
import GWtable from './mygiveawaytable'
import {
  Container, Row, Col,
  Collapse, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Listbox extends Component {

  constructor() {
    super();
    this.state = {
      collapse : false
    };

    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({collapse:!this.state.collapse});
  }

  render() {
    const data = this.props.data
    return (
      <div className="List justify-content-center card card-block">

        <ul class="list-group list-group-flush">
            
          <li class="list-group-item">
          <CardBody>
            <Container>
              <Row>
                <Col xs = {2.5}>
                  <img style = {{width:"120px"}} src = {data.giveaway_pic}/>
  
                </Col>
                <Col>
                  <h5>{data.giveawayname}</h5>
                  <h6>{this.props.data.Content}</h6>
                  <br/>
                  <br/>
                  <div className = "float-right">
                    <Button className ="btn btn-dark ListButton2">Edit</Button>
                    <Button className ="btn btn-dark ListButton2">Delete</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </CardBody>
          </li>

          <li class="list-group-item">
          <Button onClick={this.toggle} className = "btn btn-dark ListButton">Reciever List</Button>
          <Collapse isOpen={this.state.collapse}>
              <CardBody>
                <GWtable data = {data.giveawayname} />
              </CardBody>
          </Collapse>
          </li>

        </ul>

      </div>
    );

  }

}

export default Listbox;
