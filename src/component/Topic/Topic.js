import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  // console.log(topic);
  const { id, name, logo, total } = topic;
  return (
    <div className="">
      <p>topic ID: {id}</p>
      <p>Name: {name}</p>
      <p>Logo: {logo}</p>
      <p>Total: {total}</p>
      <Link to={`/topic/${id}`}>
        <button>Start Practice</button>
      </Link>
    </div>
  );
};

export default Topic;
