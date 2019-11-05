
import {banner_find} from "./Banner_find";
import React, {Component} from "react";

console.log(banner_find)
var imgfilename;
//var img_banner;
class Picshow extends Component {
    imgget (roomname) {
        const bn = banner_find;
        var imgnum = bn.findIndex((value)=>{return value.roomname === this.props.nameroom});
        if(imgnum>=0){
            console.log(bn[imgnum].room_img)
            return bn[imgnum].room_img;
        }
        else{
            return null;
        }
        
    }
    
    render() {
        imgfilename = this.imgget(this.props.nameroom);
        console.log(imgfilename);
        console.log('Get out');
        return(
            <div><img src = {imgfilename}></img></div>
        )
    }
}
export default Picshow;