import React, { useState } from "react";
import qsnBgImg from "../../media/image/background-img.jpg";
import { useLoaderData } from "react-router-dom";
import QsnAns from "../QsnAns/QsnAns";
import "./Quiz.css";

const Quiz = () => {
  const [corrAns, setCorrAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const quiz = useLoaderData();
  const { name, questions } = quiz.data;
  return (
    <div className="lg:flex">
      <div className="">
        <h4 className="text-4xl text-center pt-10 mb-3 ">Skills in {name}</h4>
        <hr className="w-3/5 border mx-auto " />
        <div className="  lg:w-4/5 mx-auto">
          {questions.map((questionAns, index) => (
            <QsnAns
              correct={[corrAns, setCorrAns]}
              wrong={[wrongAns, setWrongAns]}
              questionAns={questionAns}
              key={questionAns.id}
              index={index}
            ></QsnAns>
          ))}
        </div>
      </div>
      <div
        style={{ backgroundImage: `url('${qsnBgImg}')` }}
        className=" py-8 pl-6 pr-10 rounded-lg self-start	m-4 lg:w-96 "
      >
        <h2 className="text-xl mb-4 uppercase">Summary</h2>
        <p className="mb-2">Correct answer: {corrAns}</p>
        <p>Wrong answer: {wrongAns}</p>
      </div>
    </div>
  );
};

export default Quiz;
