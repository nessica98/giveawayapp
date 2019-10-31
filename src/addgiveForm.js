import React, {Component} from 'react';
import './addgiveForm.css'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import TimePicker from 'react-time-picker'

class addgiveForm extends Component {

  constructor() {
    super();
    this.state = {
      objectName: '',
      placeName: '',
      detail: '',
      date: '',
      time: '10:00',
      selectedOption: 'option1',
      disableTime: 'False'
    };
    this.onChangeOption = this.onChangeOption.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onChangeTime = time => this.setState({ time });

  onChangeText = changeEvent => this.setState({ [changeEvent.target.name] : changeEvent.target.value });

  onChangeOption (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    if (changeEvent.target.value === 'option2') {
      this.setState({
        time : '',
        disableTime: 'True'
      });
    }
    else {
      this.setState({
        time : '10:00',
        disableTime: 'False'
      })
    }
  }

  onClickSubmit() {
    console.log("Name : " + this.state.objectName + 
                "\nPlace : " + this.state.placeName +
                "\nDetail : " + this.state.detail +
                "\nDate : " + this.state.date +
                "\nTime : " + this.state.time );
  }

  render(){
    return(
      <div className="registerbox">
        <Form>
          <a>Add Giveaway Form</a>

          <FormGroup>
            <Label for="exObject">ชื่อของที่จะแจก</Label>
            <Input type="text" name="objectName" id="exObject" placeholder="Object Name" value = {this.state.objectName} onChange = {this.onChangeText}/>
          </FormGroup>

          <FormGroup>
            <Label for="exPlace">สถานที่จะแจก</Label>
            <Input type="text" name="placeName" id="exPlace" placeholder="Place Name" value = {this.state.placeName} onChange = {this.onChangeText}/>
          </FormGroup>

          <FormGroup>
            <Label for="exDetail">รายละเอียด</Label>
            <Input type="textarea" rows = '4' name="detail" id="exDetail" placeholder="Detail" className = 'DetailBox' value = {this.state.detail} onChange = {this.onChangeText}/>
          </FormGroup>

          <FormGroup>
            <Label for="exDate">วันที่แจก</Label>
            <Input type="date" name="date" id="exDate" placeholder="" value = {this.state.date} onChange = {this.onChangeText} />
          </FormGroup>

          <FormGroup>
            <Label for="exTime">เวลาที่แจก</Label>
            <br/>
            <Row>
              <Col xs = {1}>
                <div className="radio">
                  <label>
                    <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'}
                                                        onChange={this.onChangeOption} />
                    ระบุเวลา
                  </label>
                </div>
              </Col>
              <Col xs = {1}>
                <div className="radio">
                  <label>
                    <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'}
                                                        onChange={this.onChangeOption} />
                    TBA
                  </label>
                </div>
              </Col>
              <Col xs = {10}></Col>
            </Row>
            <TimePicker className = "timepick"
              onChange={this.onChangeTime}
              value={this.state.time}
              disableClock = 'True'
              disable = {this.state.disableTime}
            />
          </FormGroup>

          <Button color="success" onClick = {this.onClickSubmit}>SUBMIT</Button>

        </Form>
      </div>    
    );
  }
}

export default addgiveForm;