import React , {Component} from 'react';
import {Form,FormGroup,Label,Input} from 'reactstrap'

class LoginForm extends Component {
    render() {
        return(
            <div className = "loginForm">
                <Form>
                    <FormGroup>
                        <Label for="Email">Username</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password"/>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default LoginForm