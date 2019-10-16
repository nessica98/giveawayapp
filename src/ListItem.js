import React , {Component} from 'react';
import ModalBox from './component/Modal/Modal'
//import ModalB from './component/Modal/Modal2';
class ListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataset: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/giveaway')
        .then((resp)=> {return resp.json()})
        .then(dataset => {
            dataset = dataset.filter((data)=>{return data.giveaway_room === this.props.roomname })
            this.setState({dataset: dataset})
        })
        
    }
    
    render() {
        //var dataset = [{giveawayname:"Kang Dongho pink polaroid",giveaway_room:"nuest"},{giveawayname:"Hwang Minhyun", giveaway_room:"nuest"}]
        console.log(this.state.dataset);
        //console.log(dataset);
        var dataset = this.state.dataset;
        console.log(dataset);
        if(dataset.length>0){
        return(
        <ul>{dataset.map((data)=> {return <li><Item detail = {data}/></li>})}
            </ul>
        );
        }else{
            return(<ul><h3 style = {{textAlign:"center"}}>Item not found!!</h3></ul>);
        }
        
    }

}
class Item extends Component {
    constructor(props){
        super(props)
        this.state = {boxshow:false}
        this.handleClickBtn = this.handleClickBtn.bind(this)
    }
    handleClickBtn(){
        const boxshow = this.state.boxshow
        this.setState({boxshow:true})
    }
    render() {
        var item = this.props.detail;
        return(<div>
        <div></div>
        <div className="card" style={{marginTop:'15px', marginBottom:'15px',width: '100%'}}>
        <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
       <p className="card-text">{item.giveawayname}</p>
            </div>
            <div className="card-footer">
            <ModalBox data = {item} />
            </div>
       </div></div>);
    }
}

export default ListItem;