import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Roomcard = (props) => {
  const roomdata = props.roomdata
  return(
  <div><ul>
    {roomdata.map((room)=>{
      return <li>
        <Card>
          <CardImg top width="100%" src={room.room_img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{room.roomtitle}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button >Click</Button>
          </CardBody>
        </Card></li>
    })}
    </ul>
        
      </div>);
  
};

export default Roomcard;