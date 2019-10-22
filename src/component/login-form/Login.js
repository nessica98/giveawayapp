import React , {Component} from 'react';
import {Form,FormGroup,Label,Input} from 'reactstrap'
import axios from 'axios';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:'' , passwd:''
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangePasswd = this.onChangePasswd.bind(this);
    }

    onChangeUser(event){
        const user = event.target.value;
        this.setState({user:user})
    }
    onChangePasswd(event){
        const passwd = event.target.value;
        this.setState({passwd:passwd});
    }
    handleLogin(event) {
        event.preventDefault()
        const data = this.state
        
        axios.post('http://localhost:5000/user/login', data).then(
            (data)=>console.log(data)
        )
       /* const data = new FormData(event.target);
        console.log(data);
        event.preventDefault();
        fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: data
        }).then((data)=>console.log(data));*/
    }
    render() {
        return(
            <div className = "loginForm">
                <Form name = "loginForm" onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label for="Email">Username</Label>
                        <Input type="text" value = {this.state.user} placeholder="Username" onChange={this.onChangeUser}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" value = {this.state.passwd} name="password" id="password" placeholder="Password" onChange={this.onChangePasswd}/>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <button className = "btn btn-info"> Login </button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default LoginForm