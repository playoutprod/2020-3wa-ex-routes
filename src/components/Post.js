import React from 'react';
import {Link} from "react-router-dom";
import data from '../data/posts.js';


const Post = (props) =>{

  const { params } = props.match;

console.log(props)

  const postData = data.filter(elmt => elmt.id == params.id);

  return(
    <div className="post">
      <div className="container">
        <h1>{postData[0].title}</h1>
        <p>{postData[0].content}</p>
      </div>
      <div className="footer"><Link to="/dashboard">Back</Link></div>
    </div>
  )
}

export default Post;
