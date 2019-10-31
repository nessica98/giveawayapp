import React, { Component } from 'react';

import Listbox from './Listbox';

class MyGiveawayList extends Component {

    constructor() {
        super();
        this.state = {
            dataset : [
                {
                    "Id": 1,
                    "Name": "one",
                    "Content": "oneone"
                },
                {
                    "Id": 2,
                    "Name": "two",
                    "Content": "twotwo"
                }
            ]
        };
    }

    render() {

        var dataset = this.state.dataset;

        if (dataset.length>0) {
            return(<div style={{display:'block',maxwidth:'80pc'}}>
                <ul>{dataset.map((data)=> {return <Listbox data = {data}/>})}</ul>
                </div>);
        }

        else {
            return(<ul><h3 style = {{textAlign:"center"}}>Item not found!!</h3></ul>);
        }
        
    }
}

export default MyGiveawayList;