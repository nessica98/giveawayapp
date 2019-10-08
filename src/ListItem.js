import React , {Component} from 'react';

class ListItem extends Component {
    render() {
        var dataset = this.props.dataset;
        var roomdataset = dataset.filter((data)=>{return data.room === this.props.roomname})
        console.log(dataset);
        console.log(roomdataset.length);
        if(roomdataset.length>0){
        return(<ul>
            {
            roomdataset[0].product.map((item)=>{
                console.log(item);
                return <li><Item detail = {item}/></li>})
        }</ul>);
        }
        else{
            return(<h3 style = {{textAlign:'center'}}>Item not founds</h3>);
        }
    }

}
class Item extends Component {
    render() {
        var item = this.props.detail;
        return(<div className="card" style={{marginTop:'15px', marginBottom:'15px',width: '100%'}}>
        <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
       <p className="card-text">{item.Name}</p>
            </div>
       </div>);
    }
}

export default ListItem;