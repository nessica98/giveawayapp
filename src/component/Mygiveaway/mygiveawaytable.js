import React, {Component} from 'react';
import axios from 'axios'
import { Table } from 'reactstrap';

class Example extends Component {
 
    render(){
  
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
       
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
 
      </tbody>
    </Table>
  );
}
}

export default Example;