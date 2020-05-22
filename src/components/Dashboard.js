import React from 'react';
import {Link} from "react-router-dom";

import '../css/dashboard.css';

const Dashboard = (props) =>{

  const posts = props.posts ? props.posts : [];

  return(
    <ul className="dashboard">
      {
        posts.map((post,k)=>(
          <li key={k}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Dashboard;
