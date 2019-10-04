import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './App';
import * as serviceWorker from './serviceWorker';
function HomeMain () {
    return(
        <div>Homepage</div>
    )
}
const Routing = () =>{
    return(
        <BrowserRouter>
                
                <Route path = "/room" component = {()=><div>input</div>} />
                <Route path = "/room/:name" component = {Home}/>
                
            </BrowserRouter>
    );

};

       
        
ReactDOM.render(<Routing/>,document.getElementById('root'));
//ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
