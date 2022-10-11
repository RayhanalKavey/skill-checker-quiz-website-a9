import React from "react";
import { useLoaderData } from "react-router-dom";
import QsnAns from "../QsnAns/QsnAns";
import "./Quiz.css";

const Quiz = () => {
  const quiz = useLoaderData();
  const { total, id, name, logo, questions } = quiz.data;
  // console.log(quiz.data);
  // console.log(questions);
  return (
    <div>
      <h4 className="text-4xl text-center pt-10 ">Skills in {name}</h4>
      <div className="w-2/3 mx-auto">
        {questions.map((questionAns, index) => (
          <QsnAns
            questionAns={questionAns}
            key={questionAns.id}
            index={index}
            nameTopic={name}
          ></QsnAns>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
