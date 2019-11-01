import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './App';
import ModalB from './component/Modal/Modal2'
import * as serviceWorker from './serviceWorker';
import Registerform from './register'
import Room from './Room'
import Detail from './Detail'

function HomeMain () {
    return(
        <div>Homepage</div>
    )
}
const Routing = () =>{
    return(
        
        <BrowserRouter>
                <Route exact path = "/room/:name" component = {Home}/>
        
                <Route exact path = "/" component = {Room} />
   >
                <Route exact path = "/register" component = {Registerform}/>
  >
                <Route exact path = "/dialog" component = {()=><ModalB show = {true}/>}/> 
                <Route exact path = "/detail" component = {Detail}/> 
        </BrowserRouter>
        
    );

};

       
        
ReactDOM.render(<Routing/>,document.getElementById('root'));
//ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
