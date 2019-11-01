import React, {Component} from 'react';
import './addgiveForm.css'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'

class addgiveForm extends Component {

  constructor() {
    super();
    this.state = {
      objectName: '',
      placeName: '',
      detail: '',
      date: '',
      time: new Date(),
      timesend: format(new Date(), "h:mm aa"),
      selectedOption: 'option1',
      disableTime: false,
      date: new Date(),
      datesend : format(new Date(), "yyyy-MM-dd")
    };
    this.onChangeOption = this.onChangeOption.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.handleChange = this.onChangeDate.bind(this);
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
        timesend : '',
        disableTime: true
      });
    }
    else {
      this.setState({
        time : new Date(),
        timesend : format(new Date(), "h:mm aa"),
        disableTime: false
      })
    }
  }

  onChangeTime = date => {
    this.setState({
      time: date,
      timesend: format(date, "h:mm aa")
    });
  };

  onChangeDate = date => {
    this.setState({
      date: date,
      datesend: format(date, "h:mm aa")
    });
  };

  onClickSubmit() {
    console.log("Name : " + this.state.objectName + 
                "\nPlace : " + this.state.placeName +
                "\nDetail : " + this.state.detail +
                "\nDate : " + this.state.datesend +
                "\nTime : " + this.state.timesend );
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
            <Label for="exDate">วันที่แจก</Label><br/>
            <DatePicker id = "exDate"
                        className = "react-datepickera react-datepickera__today-button react-datepickera__header" 
                        selected={this.state.date} 
                        onChange={this.onChangeDate}
                        dateFormat="eee d MMMM yyyy"
                        />
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


            <DatePicker
              className = "react-datepickera react-datepickera__today-button react-datepickera__header"
              selected={this.state.time}
              onChange={this.onChangeTime}
              showTimeSelect
              showTimeSelectOnly
              disabled = {this.state.disableTime}
              timeIntervals={15}
              timeCaption="Time"
              placeholderText="This is disabled"
              dateFormat="h:mm aa"
            />

          </FormGroup>

          <Button color="success" onClick = {this.onClickSubmit}>SUBMIT</Button>

        </Form>
      </div>    
    );
  }
}

export default addgiveForm;