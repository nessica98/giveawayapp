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
                
=======
>>>>>>> 06bead451273ad5d83ea79d5c9b8e4a435e3f999

                
                <li><Jong dataitem = {datagw} /></li>

                <li>From Giver : </li>
                <li><ListGroup color = "warning">{datagw.giveaway_useranouce}</ListGroup></li>
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