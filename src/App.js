import React, {Component} from 'react';
//import React {Component} from 'react';
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
import ListItem from "./ListItem";
import {connect} from "react-redux"

import Icon from './iconshow';
import {banner_find} from './Banner_find'
import UserStatus from "./component/Userstatus/UserStatus"
import { Container, Row, Col } from 'reactstrap';


class Home extends Component{
  ///logged = useSelector(state => state.logged);
  constructor(props){
    super(props);
  }
  store = this.props.store
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

  
  componentDidMount(){

  }

  render(){
    //var data = [{room:'nuest',product:[{Name: 'Kang Dongho poloroid'}]},{room:'x1official',product:[{Name: 'Sticker Seungwoo 70ea',owner:'mydanielpeach'},{Name:'Kang Minhee polaroid 20ea'}]}];
    console.log(this.props)
    //this.store.dispatch()
    console.log(this.props.match.params.name);
    const {params} = this.props.match;
    console.log(typeof(params.name));         
    let sideDrawer;
    let backdrop;
    const findBanner = (array,roomname) => {
      return array.findIndex((data) => {
        //console.log(data.roomname,roomname)
        //console.log(typeof(data.roomname),typeof(roomname))
        return data.roomname == roomname
      })
    }
    console.log(findBanner(banner_find,params.name))
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    //const img1 = './img/nubanner.jpg'
  if(findBanner(banner_find,params.name)==-1){

    return(<div>
      <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      
      <main >
        <div style ={{display: 'flex',  justifyContent:'center', alignItems:'center' , marginTop:'100px'}}>
          <Picshow nameroom = {this.state.roomname} />
        </div>
        <nav className = 'roomnotfound'>
          <ul>
          <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}><li>Room Not Found</li></Col>
          </Row>
          </ul>
          <ul>
          </ul>
        </nav>
      </main>
    </div>
      
      
      
     





    </div>)

  }
  else{
    return (
    <div>
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      
      <main >
        <div style ={{display: 'flex',  justifyContent:'center', alignItems:'center' , marginTop:'100px'}}>
          <Picshow nameroom = {this.state.roomname} />
        </div>
        <nav className = 'hellofrom'>
          <ul>

            <Row>
            <Col sm="12" md={{ size:10, offset: 1 }}>
              <li><div className ><UserStatus /></div></li>
              </Col>
            </Row>
          <Row>
             <Col sm="12" md={{ size: 6, offset: 3 }}>

            <li><div className="listView"><Icon roomname = {this.state.roomname}/></div></li>
            </Col>
          </Row>
          <Row>
          <Col sm="12" md={{ size:10, offset: 1 }}>
            <li><div className ="listView"><ListItem roomname = {this.state.roomname} /></div></li>
          </Col>
          </Row>
          </ul>
          <ul>
          </ul>
        </nav>
      </main>
    </div>
    </div>    
  
  );
  }
}
}


const mapStateToProp = (state) =>{
  return({token:state.token})
}
export default connect (mapStateToProp) (Home);