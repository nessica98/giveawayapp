import React, {Component} from 'react';
import axios from 'axios'
import { Table } from 'reactstrap';

class Example extends Component {
    constructor(props){
      super(props)
      this.state = {
        data: []
      }
    }
    componentDidMount(){
      const gw_name = this.props.data
      const url = 'http://localhost:5000/queue/giveaway/'+gw_name
      axios.get(url).then((res)=>{
        console.log(res.data)
        this.setState({data:res.data})
      })
    }
    render(){
      const gw_name = this.props.data
      console.log(gw_name)
      console.log(this.state.data)
    return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>รหัสการจอง</th>
          <th>ชื่อผู้ใช้</th>
          <th>สถานะการรับของ</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map((item)=>{return(
          <tr>
          <th>#</th>
          <th>{item.queue_code}</th>
          <th>{item.queue_user}</th>
          <th>{item.queue_isreceived}</th>
        </tr>)
        })}
        
 
      </tbody>
    </Table>
  );
}
}

export default Example;