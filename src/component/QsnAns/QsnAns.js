import React, { useContext, useState } from "react";
import "./QsnAns.css";
import qsnBgImg from "../../media/image/background-img.jpg";
import { EyeIcon } from "@heroicons/react/24/solid";
import Ans from "../Ans/Ans";
import { toast } from "react-toastify";

const QsnAns = ({ questionAns, index }) => {
  // const [answer, setAnswer] = useState("");

  const [correctAns, setCorrectAns] = useState(false);
  const { options, id, question, correctAnswer } = questionAns;
  // Correct ans handler
  const handleCorrect = () => {
    setCorrectAns(!correctAns);
  };
  // Justify the answer
  const handleSelect = (option) => {
    if (option === correctAnswer) {
      toast.success("Correct answer", { autoClose: 500 });

      alert("Correct answer");
    } else {
      alert("Wrong answer");
      toast.warn("Wrong answer", { autoClose: 500 });
    }
  };
  return (
    <div
      style={{ backgroundImage: `url('${qsnBgImg}')` }}
      className="qsn-container m-10 px-8 p-10 rounded-lg shadow-2xl text-[#f9f8f0] "
    >
      {/*Questions */}

      <h2 className="text-2xl mt-7 mb-10 ">
        Quiz {index + 1}: {question}
      </h2>

      {/* Options */}
      <div className="lg:flex justify-between relative">
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

        <div className="lg:flex gap-3 justify-start flex-row-reverse 	">
          <div>
            <EyeIcon
              onClick={handleCorrect}
              className="h-7 cursor-pointer w-6  text-[#f9f8f0]"
            />
          </div>
          <div
            className={` border p-2 rounded-lg absolute  lg:top-[2rem]  lg:right-0  bg-[#ad7b43] ${
              correctAns ? `block` : `hidden`
            }`}
          >
            <span className="font-semibold uppercase">Correct answer:</span>{" "}
            {correctAnswer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QsnAns;
