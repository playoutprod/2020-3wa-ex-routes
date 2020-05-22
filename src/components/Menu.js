import React from 'react';
import {Link} from "react-router-dom";
import "../css/menu.css";

const Menu = (props) =>{
  return(
    <ul className="menu">
      {
        props.children.map((link,k) => (<li key={k}>{link}</li>))
      }
      <li>
        {
          props.isLogged ?  <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>
        }
      </li>
    </ul>
  )
}

export default Menu;
