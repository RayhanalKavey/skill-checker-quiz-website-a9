import React from "react";
import { useLoaderData } from "react-router-dom";
import QsnAns from "../QsnAns/QsnAns";

const Quiz = () => {
  const quiz = useLoaderData();
  const { total, id, name, logo, questions } = quiz.data;
  // console.log(quiz.data);
  // console.log(questions);
  return (
    <div>
      <h4>Quiz will be displayed here</h4>
      {questions.map((questionAns) => (
        <QsnAns questionAns={questionAns} key={questionAns.id}></QsnAns>
      ))}
    </div>
  );
};

export default Quiz;
