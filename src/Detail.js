import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Button } from 'reactstrap';
import './Detail.css';
import Jong from './Jongmodal'
//import { super } from '@babel/types';

class Detail extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const datagw = this.props.data
    console.log(datagw)
    return (
  
        <div className="App">
          <div className="App__Aside">
          <div className = "aaa">
            <ListGroup >
                <ul>
                <li><ListGroupItem>ชื่อของ : {datagw.giveawayname} </ListGroupItem></li>
                <li><ListGroupItem>แจกโดย : {datagw.giveaway_givername}</ListGroupItem></li>
                <li><ListGroupItem>สถานที่ : </ListGroupItem></li>
                <li><ListGroupItem>วันเวลา : </ListGroupItem></li>
                <li><ListGroupItem>จำนวนของที่เหลือ : <Badge pill>1</Badge></ListGroupItem></li>
                <li><Jong dataitem = {datagw} /></li>
                <li>From Giver : </li>
                <li><ListGroupItem color="warning"></ListGroupItem></li>
                </ul>
            </ListGroup>
          </div>

          
          
          
          </div>
          <div className="App__Form">
           
          </div>
          

        </div>
      
    
    );
  }
}

export default Detail;