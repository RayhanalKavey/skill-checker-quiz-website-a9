import React, { useContext } from "react";
import { TopicsContext } from "../../outlet/Main";
import Topic from "../Topic/Topic";
import homeImg from "../../media/image/header-image.jpg";
import "./Home.css";
const Home = () => {
  const topics = useContext(TopicsContext);
  return (
    <div className="container mx-auto my-10">
      {/*Home Header  */}
      <div className="home-header grid lg:grid-cols-5 shadow-xl rounded-lg p-2 mb-10">
        <div className="lg:col-span-2">
          <img className="w-[100%] h-[100%] rounded-lg	 " src={homeImg} alt="" />
        </div>
        <div className="lg:col-span-3 p-5 ">
          <h2 className="text-2xl font-bold ">
            Most Popular Web Development Interview Questions and Answers for
            2022
          </h2>
          <p className="mt-5">
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
      {/* Topics Card */}
      <div className="grid lg:grid-cols-2">
        {topics.map((topic) => (
          <Topic topic={topic} key={topic.id}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
