import React, { useState } from "react";
import "./QsnAns.css";
import qsnBgImg from "../../media/image/background-img.jpg";
import { BeakerIcon, EyeIcon } from "@heroicons/react/24/solid";

const QsnAns = ({ questionAns, index, nameTopic }) => {
  // console.log("kkkk", nameTopic);
  const [answer, setAnswer] = useState("");
  const [correctAns, setCorrectAns] = useState(false);
  const { options, id, question, correctAnswer } = questionAns;
  const handleCorrect = () => {
    // setCorrectAns(correctAnswer);
    setCorrectAns(!correctAns);
  };
  const handleSelect = (event) => {
    console.log("clicked", event.target.value);
    // setAnswer()
  };
  return (
    <div
      style={{ backgroundImage: `url('${qsnBgImg}')` }}
      className="qsn-container m-10 p-7 rounded-lg shadow-2xl text-[#f9f8f0]"
    >
      {/*Questions */}

      <h2 className="text-2xl mt-7 mb-10 ">
        Quiz {index + 1}: {question}
      </h2>

      {/* Options */}
      <div className="flex justify-between">
        <div>
          {options.map((option, index) => (
            <form className="flex items-center gap-3 mb-2" key={index}>
              <input
                type="radio"
                name={nameTopic}
                id={id}
                value={option}
                onChange={handleSelect}
              />
              <label htmlFor={id}>{option}</label>
            </form>
          ))}
        </div>
        {/* Display the correct ans when clicked the eye button */}
        <div>
          {correctAns ? (
            <div className="flex gap-3 justify-start">
              <div className=" cursor-pointer border p-2 rounded-lg">
                <span className="font-semibold uppercase">Correct answer:</span>{" "}
                {correctAnswer}
              </div>
              <EyeIcon
                onClick={handleCorrect}
                className="h-6 cursor-pointer w-6 text-[#f9f8f0]"
              />
            </div>
          ) : (
            <EyeIcon
              onClick={handleCorrect}
              className="h-6 cursor-pointer w-6 text-[#f9f8f0]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QsnAns;
