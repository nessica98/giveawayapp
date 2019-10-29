import React, {Component} from 'react';
//import React {Component} from 'react';
import logo from './logo.svg';
import Toolbar from './component/Toolbar/Toolbar.js';
import SideDrawer from './component/SideDrawer/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';
import sideDrawer from './component/SideDrawer/SideDrawer';
import backdrop from './component/Backdrop/Backdrop';
import { Button } from 'reactstrap';
import './room.css'
import Picshow from "./picshow";
import Roomcard from "./CardRoom"
import Slide from './Slide'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import ModalB from './component/Modal/Modal2'

class Room extends Component{
  constructor(props){
    super(props);
  }

 state = {
    roomname: this.props.match.params.name,
    sideDrawerOpen: false
  };
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
   this.setState({sideDrawerOpen: false});
};

  render(){
    //var data = [{room:'nuest',product:[{Name: 'Kang Dongho poloroid'}]},{room:'x1official',product:[{Name: 'Sticker Seungwoo 70ea',owner:'mydanielpeach'},{Name:'Kang Minhee polaroid 20ea'}]}];
   
    
    console.log(this.props.match.params.name);
    const {params} = this.props.match;
    console.log(params);         
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    //const img1 = './img/nubanner.jpg'
  
  return (
    
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      
      <main >
        <div className = 'hellofrom'>
        <ul>
        <li><Slide /></li>
        <li><Roomcard /></li>
        </ul>
        </div>
      </main>
      
    </div>
  
  );
  }
}


export default Room;
