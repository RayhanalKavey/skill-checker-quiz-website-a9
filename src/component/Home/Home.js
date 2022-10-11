import React, { useContext } from "react";
import { TopicsContext } from "../../outlet/Main";
import Topic from "../Topic/Topic";

const Home = () => {
  const topics = useContext(TopicsContext);
  console.log(topics);
  return (
    <div>
      <h4>This is home component.</h4>
      {topics.map((topic) => (
        <Topic topic={topic} key={topic.id}></Topic>
      ))}
    </div>
  );
};

export default Home;
