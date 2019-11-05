import React, {Component} from 'react';
import './register.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class Registerform extends Component {
    constructor(props){
      super(props)
      this.state = {username:'',password:'',password2:'',twittername:''}
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
      this.handleEmailOnChange = this.handleEmailOnChange.bind(this)
      this.handleConfirmPassOnChange = this.handleConfirmPassOnChange.bind(this) 
      this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this)
      this.handleTwitterOnChange = this.handleTwitterOnChange.bind(this)
    }
    handleEmailOnChange(e){
      this.setState({username:e.target.value})
      //console.log(this.state)
    }
    handleConfirmPassOnChange(e){
      this.setState({password2:e.target.value})
    }
    handlePasswordOnChange(e){
      this.setState({password:e.target.value})
    }
    handleTwitterOnChange(e){
      this.setState({twittername:e.target.value})
    }
    handleOnSubmit(e){
      e.preventDefault();
      if(this.state.password!==this.state.password2){
        alert('Password doesn\'t match')
      }else{
        const data = this.state
        console.log(data)
        // Add user to database
        axios.post('http://localhost:5000/user/add',data).then((res)=>{
          console.log(res)
          window.location.replace("/");
        }).catch((res)=>{
          alert('สมัครไม่สำเร็จ (ชื่อผู้ใช้ซ้ำกัน)')
        })
      }
    }
    render(){
        return(
        <div className="registerbox">
         <Form onSubmit = {this.handleOnSubmit}>
        <a>Register Form</a>
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input onChange = {this.handleEmailOnChange} value = {this.state.email} type="username" name="username" id="exampleEmail" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input onChange = {this.handlePasswordOnChange} value = {this.state.password} type="password" name="password" id="examplePassword" placeholder="Password " />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Confirm Password</Label>
        <Input onChange = {this.handleConfirmPassOnChange} value = {this.state.confirmpassword} type="password" name="password" id="examplePassword" placeholder="Password " />
      </FormGroup>
      <FormGroup>
        <Label for="exampletwitter">Twitter</Label>
        <Input onChange = {this.handleTwitterOnChange} value = {this.state.Twitter} type="twitter" name="twittername" id="exampletwitter" placeholder="Twitter Account" />
      </FormGroup>
      <Button color="success">SUBMIT</Button>{' '}
      </Form>

        
        
        </div>    
        );

    }
}
export default Registerform;