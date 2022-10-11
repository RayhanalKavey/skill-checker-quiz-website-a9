import React, { useContext } from "react";
import { TopicsContext } from "../../outlet/Main";
import Topic from "../Topic/Topic";
import homeImg from "../../media/image/header-image.jpg";

const Home = () => {
  const topics = useContext(TopicsContext);
  // console.log(topics);
  return (
    <div className="container mx-auto py-10">
      <div className="home-header grid grid-cols-4">
        <div className="col-span-1">
          <img className="w-[100%] rounded-lg	" src={homeImg} alt="" />
        </div>
        <div className="col-span-3 p-5">
          <h2 className="text-2xl font-bold">
            Most Popular Web Development Interview Questions and Answers for
            2022
          </h2>
          <p>
            Web Development is quite the buzzword in the industry these days. As
            of now, Web Development is the most popular technology that more and
            more companies need, and if you are preparing for a job interview,
            this is the best interview questions tutorial. Here's a
            comprehensive list of all the common web development interview
            questions in different topics from basic to advanced levels that are
            frequently asked in interviews.
          </p>
        </div>
      </div>
      <div className="">
        {topics.map((topic) => (
          <Topic topic={topic} key={topic.id}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
