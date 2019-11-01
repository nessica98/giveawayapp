import React, { Component, useState } from 'react';
//import './Listbox.css';
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

    return (
      <div className="List justify-content-center card card-block">

        <ul class="list-group list-group-flush">
            
          <li class="list-group-item">
          <CardBody>
            <Container>
              <Row>
                <Col xs = {2.5}>
                  <img className = "img" src = ""/>
                  <br/>
                  <Button className = "btn btn-dark ListButton3 AddImageFont">Add Image</Button>
                </Col>
                <Col>
                  <h5>{this.props.data.Name}</h5>
                  <h6>{this.props.data.Content}</h6>
                  <br/>
                  <br/>
                  <div className = "float-right">
                    <Button className ="btn btn-dark ListButton2">one</Button>
                    <Button className ="btn btn-dark ListButton2">two</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </CardBody>
          </li>

          <li class="list-group-item">
          <Button onClick={this.toggle} className = "btn btn-dark ListButton">Toggle</Button>
          <Collapse isOpen={this.state.collapse}>
              <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
              </CardBody>
          </Collapse>
          </li>

        </ul>

      </div>
    );

  }

}

export default Listbox;
