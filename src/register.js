import React, {Component} from 'react';
import './register.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Registerform extends Component {

    render(){
        return(
        <div className="registerbox">
         <Form>
        <a>Register Form</a>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password " />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Confirm Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password " />
      </FormGroup>
      <FormGroup>
        <Label for="exampletwitter">Twitter</Label>
        <Input type="twitter" name="twitter" id="exampletwitter" placeholder="Twitter Account" />
      </FormGroup>
      <Button color="success">SUBMIT</Button>{' '}
      </Form>

        
        
        </div>    
        );

    }
}
export default Registerform;