import React from "react";

const Post = (props) => {
 
  return (
    <div className="d-sm-flex justify-content-center align-items-center p-2 ">
      <div className="p-2"><span>{props.data}</span></div>
      <div className="p-2"><span>{props.header}</span></div>
      <div className="p-2"><span>{props.text}</span></div>
      <button className="btn btn-danger btn-sm m-2" onClick={()=>props.onDelete(props.id)}>Delete</button>
    </div>
);
}
export default Post;
