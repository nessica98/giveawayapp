import React , {Component} from 'react';
import ModalBox from './component/Modal/Modal';
import {Container, Row, Col} from 'reactstrap';
//import ModalB from './component/Modal/Modal2';
class ListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataset: [],
            API_LINK: 'http://localhost:5000/giveaway'
        }
        const API_LINK = 'http://localhost:5000/giveaway' // Link of Giveaway API
    }
    componentWillMount() {
        fetch(this.state.API_LINK)
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
        var imgstyle = this.imagestyle;
        return(
        
        <div>
            <div className="card" style={{marginTop:'15px', marginBottom:'15px',width: '100%'}}>
                <Container>
                    <Row>
                        <Col xs = {2.5}>
                            <img src="/images/1126.jpg" style = {{maxWidth:"300px"}} className="}card-img-top" alt="..."></img>
                        </Col>
                        <Col>
                        <div className="card-body">
                            <p className="card-text">{item.giveawayname}</p>
                            <p className="card-text">By...{item.giveaway_givername}</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
                <div className="card-footer">
                        <ModalBox buttonLabel = {"Detail"}  data = {item} />
                </div>
            </div>
        </div>);
    }
}

export default ListItem;