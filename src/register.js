import React, {Component} from 'react';
import './register.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Registerform extends Component {
    constructor(props){
      super(props)
      this.state = {email:'',password:'',twitter:''}
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
      this.handleEmailOnChange = this.handleEmailOnChange.bind(this)
      //this.handleUserOnChange = this.handleUserOnChange.bind(this) 
      this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this)
      this.handleTwitterOnChange = this.handleTwitterOnChange.bind(this)
    }
    handleEmailOnChange(e){
      this.setState({email:e.target.value})
      //console.log(this.state)
    }
    handleUserOnChange(e){

    }
    handlePasswordOnChange(e){
      this.setState({password:e.target.value})
    }
    handleTwitterOnChange(e){
      this.setState({twitter:e.target.value})
    }
    handleOnSubmit(e){
      e.preventDefault();
      const data = this.state
     console.log(data)
    }
    render(){
        return(
        <div className="registerbox">
         <Form onSubmit = {this.handleOnSubmit}>
        <a>Register Form</a>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input onChange = {this.handleEmailOnChange} value = {this.state.email} type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input onChange = {this.handlePasswordOnChange} value = {this.state.password} type="password" name="password" id="examplePassword" placeholder="Password " />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Confirm Password</Label>
        <Input value = {this.state.confirmpassword} type="password" name="password" id="examplePassword" placeholder="Password " />
      </FormGroup>
      <FormGroup>
        <Label for="exampletwitter">Twitter</Label>
        <Input onChange = {this.handleTwitterOnChange} value = {this.state.Twitter} type="twitter" name="twitter" id="exampletwitter" placeholder="Twitter Account" />
      </FormGroup>
      <Button color="success">SUBMIT</Button>{' '}
      </Form>

        
        
        </div>    
        );

    }
}
export default Registerform;