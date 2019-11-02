import React , {Component} from 'react';
import {Form,FormGroup,Label,Input} from 'reactstrap'
import {connect} from 'react-redux'
import axios from 'axios';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:'' , passwd:'',loginsuccess:false
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
            (res)=>{
                console.log(res.data)
                const data = res.data
                if (data.user === 'incorrectpass') {
                    // incorrectpass
                    alert('Incorrect password')
                }
                else if(data.user === 'usernotfound'){
                    // usernotfound
                    alert('user not found')
                }
                else{
                    // keep key in localStorage
                    let token = data
                    this.props.signIn(token)
                    localStorage.setItem('token',token)
                    this.setState({loginsuccess:true})
                    console.log(localStorage.getItem('token'))
                    window.location.reload(true)
                    //return <Redirect to = '/' />
                    // change state home 
                    //store.dispatch({type:'SIGN IN', token:token})
                }
            }
        ).then(()=>{
            console.log('go')
            
        })
       
    }
    renderRedirect() {
        if (this.state.loginsuccess) {
            return <div>
                <h4>Login success</h4>
            </div>
          }
    }
    render() {
        console.log(this.props.token)
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
            
            {this.renderRedirect()}
            </div>
        );
    }
}
const Success = () =>{
    return <div>
        <h2>Login success</h2>
    </div>
}

const mapStateToProp = (state) =>{
    return({token:state.token})
}
const mapDispatchToProp = (dispatch)=>{
    return({
        signIn: (token)=>{
            dispatch({
                type: "SIGN_IN",
                payload: token
            })
        }
    })
}
export default connect (mapStateToProp,mapDispatchToProp) (LoginForm)