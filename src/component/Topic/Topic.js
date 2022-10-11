import React from "react";
import { Link } from "react-router-dom";
import "./Topic.css";
const Topic = ({ topic }) => {
  // console.log(topic);
  const { id, name, logo, total } = topic;
  return (
    <div className="topic-card  items-center col-span-1 rounded-lg bg-[#ECD6BF] p-3 grid grid-cols-2 m-5">
      <div className="">
        <p className="text-5xl mb-5 font-semibold">{name}</p>
        {/* <p>topic ID: {id}</p> */}

        <p>Number of Quiz: {total}</p>
        <Link
          className="px-4 py-2 mt-5 inline-block rounded-lg"
          to={`/topic/${id}`}
        >
          Check Skills
        </Link>
      </div>

      <img className="w-full 	" src={logo} alt="topic related logo" />
    </div>
  );
};

export default Topic;
