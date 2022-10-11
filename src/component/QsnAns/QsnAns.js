import React, { useState } from "react";
import "./QsnAns.css";
import qsnBgImg from "../../media/image/background-img.jpg";
import { EyeIcon } from "@heroicons/react/24/solid";

const QsnAns = ({ questionAns, index, nameTopic }) => {
  const [answer, setAnswer] = useState("");
  const [correctAns, setCorrectAns] = useState(false);
  const { options, id, question, correctAnswer } = questionAns;
  // Correct ans handler
  const handleCorrect = () => {
    setCorrectAns(!correctAns);
  };
  const handleSelect = (event) => {
    console.log("clicked", event.target.value);
  };
  return (
    <div
      style={{ backgroundImage: `url('${qsnBgImg}')` }}
      className="qsn-container m-10 px-8 p-10 rounded-lg shadow-2xl text-[#f9f8f0]"
    >
      {/*Questions */}

      <h2 className="text-2xl mt-7 mb-10 ">
        Quiz {index + 1}: {question}
      </h2>

      {/* Options */}
      <div className="lg:flex justify-between">
        <div className="w-2/3">
          {options.map((option, index) => (
            <form className="flex items-center gap-3 mb-5" key={index}>
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
          <div className="lg:flex gap-3 justify-start flex-row-reverse	">
            <div>
              <EyeIcon
                onClick={handleCorrect}
                className="h-7 cursor-pointer w-6  text-[#f9f8f0]"
              />
            </div>
            {/* <p className={` items ${cart.length === 6 ? `green-cart` : `purple-cart`}`}>
       Selected Items: {cart.length}</p> */}

            <div
              className={` border p-2 rounded-lg ${
                correctAns ? `block` : `hidden`
              }`}
            >
              <span className="font-semibold uppercase">Correct answer:</span>{" "}
              {correctAnswer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QsnAns;
