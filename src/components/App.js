import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute';

import Home from './Home'
import Login from './Login';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Post from './Post';


import '../css/app.css';
import data from '../data/posts.js';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLogged : localStorage.getItem('authToken') ? true : false
    }
  }

  onLog = (login)=>{
    this.setState ({
      isLogged : login
    })
  }

  render(){
    return (
      <div className = "App">
        <Router>
          <Menu isLogged={this.state.isLogged}>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
          </Menu>
          <Switch>
            <Route exact path="/" component={Home}/>

            <Route path="/login" render={(props)=>(<Login onLog={this.onLog} isLogged={this.state.isLogged} {...props}/>)}/>

            <Route path="/logout" render={(props)=>(<Login onLog={this.onLog} isLogged={this.state.isLogged} {...props}/>)}/>

            <PrivateRoute path="/dashboard" component={Dashboard} posts={data}/>

            <PrivateRoute path="/post/:id" component={Post} />

          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
