import React, {Component} from 'react';
import {banner_find} from './Banner_find'

class Icon extends Component{
    constructor(props){
        super(props)
        this.state = {
            roomname:this.props.roomname
        }
    }

    
  

    
    render() {
        //console.log(this.state.roomname)
        let picarray = banner_find.find((data)=>{
            //console.log(data)
            return data.roomname === this.state.roomname
        })
        picarray = picarray.room_member
        console.log(picarray)
        if(picarray){
        return(<div >
            <ul>
                {
                    picarray.map((pic)=>{
                    return <li style={{display:"inline"}}><img style = {{marginLeft:"10px",height:"100px"}} src = {pic}/></li>
                    })}
            </ul>
        </div>)
        }else{
            return(<div></div>);
        }
    }
}
export default Icon