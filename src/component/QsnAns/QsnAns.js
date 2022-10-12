import React, { useState } from "react";
import "./QsnAns.css";
import qsnBgImg from "../../media/image/background-img.jpg";
import { EyeIcon } from "@heroicons/react/24/solid";
import Ans from "../Ans/Ans";
import toast, { Toaster } from "react-hot-toast";

const QsnAns = ({ questionAns, index, correct, wrong }) => {
  const [corrAns, setCorrAns] = correct;
  const [wrongAns, setWrongAns] = wrong;
  const [alreadyAnswered, setAlreadyAnswered] = useState([]);

  const { options, id, question, correctAnswer } = questionAns;
  // console.log(questionAns); //here we have individual question which has a unique id
  // Correct ans handler
  const handleCorrectAns = () => {
    toast.success(`The correct answer is: ${correctAnswer}`, {
      autoClose: 600,
    });
  };
  // Justify the answer
  const handleSelect = (option, ID) => {
    if (!alreadyAnswered.includes(ID)) {
      if (option === correctAnswer) {
        setCorrAns(corrAns + 1);
        toast.success("Correct answer", { autoClose: 500 });
      } else {
        setWrongAns(wrongAns + 1);
        toast.error("Wrong answer", { autoClose: 500 });
      }
      setAlreadyAnswered([...alreadyAnswered, ID]);
    } else {
      toast.success("Already answered", { autoClose: 500 });
    }
  };
  return (
    <div
      style={{ backgroundImage: `url('${qsnBgImg}')` }}
      className="qsn-container m-10 px-8 p-10 rounded-lg shadow-2xl text-[#f9f8f0] "
    >
      {/*Questions */}

      <div className="flex justify-between">
        <h2 className="text-2xl mt-7 mb-10 ">
          Quiz {index + 1}: {question}
        </h2>
        <div>
          <EyeIcon
            onClick={handleCorrectAns}
            className="h-7 cursor-pointer w-6  text-[#f9f8f0]"
          />
        </div>
      </div>
      {/* Options */}

      <div className="w-2/3">
        {options.map((option, idx) => (
          <Ans
            option={option}
            key={idx}
            id={id}
            handleSelect={handleSelect}
          ></Ans>
        ))}
      </div>
      {/* Display the correct ans when clicked the eye button */}
    </div>
  );
};

export default QsnAns;
