import React, {Component} from 'react';
//import React {Component} from 'react';
import logo from './logo.svg';
import Toolbar from './component/Toolbar/Toolbar.js';
import SideDrawer from './component/SideDrawer/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';
import sideDrawer from './component/SideDrawer/SideDrawer';
import backdrop from './component/Backdrop/Backdrop';
import { Button } from 'reactstrap';
import './App.css'
import Hello from "./Hello";
import Slide from "./Slide"
import Picshow from "./picshow";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component{
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
    console.log(this.props.match.params.name);
    const {params} = this.props.match;
    console.log(params);         
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  
  return (
    
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      <main >
        
        <nav className = 'hellofrom'>
        <ul>
        <Slide nameroom = {this.state.roomname}/>
        <li><d>NEW</d></li>
        <li><Picshow nameroom = {this.state.roomname}/></li>
        </ul>
        </nav>
      </main>
      
    </div>
  
  );
  }
}


export default Home;
