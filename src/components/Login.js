import React,{Component} from 'react';
import {Redirect} from "react-router-dom";
import "../css/forms.css";


import cred from '../config/credentials'

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      login:"",
      password:""
    }

    console.log(this.props)

    if(this.props.location){
      if(this.props.location.pathname === "/logout"){
        localStorage.removeItem('authToken');
        if(this.props.onLog){
          this.props.onLog(false);
        }
      }
    }
  }

  handleChange = (event)=>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  login = (event)=>{
    event.preventDefault();
    if(this.state.login === cred.login && this.state.password === cred.password){
      localStorage.setItem('authToken',`${this.state.login}:${this.state.password}`);

      if(this.props.onLog){
        this.props.onLog(true);
      }
      this.forceUpdate();
    }
  }

  render(){

    if(localStorage.getItem('authToken')){
      if(this.props.location){
        return(
          <Redirect to={{pathname : '/', state : { from : this.props.location.pathname}}}/>
        )
      }else{
        return(<div className="notice">
          You are logged as {localStorage.getItem('authToken').split(':')[0]}
        </div>)
      }
    }else{
      return(
        <form className="loginForm">
          <input name="login" value={this.state.value} type="text" placeholder="login" onChange={this.handleChange}/>
          <input name="password" value={this.state.password} type="password" placeholder="password" onChange={this.handleChange}/>
          <button onClick={this.login} type="submit">login</button>
        </form>
      )
    }
  }
}

export default Login;
