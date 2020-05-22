import React from 'react';

import {Route,Redirect} from "react-router-dom";

const PrivateRoute = (props) =>{

  const Component = props.component;
  const isLogged = localStorage.getItem('authToken');

  return(
    <Route path={props.path} render={(rest) => {
      return(isLogged ? <Component match={rest.match} {...props}/> : <Redirect to={{pathname : '/login', state : { from : "/"}}}></Redirect>)
    }}/>
  )

}

export default PrivateRoute;
