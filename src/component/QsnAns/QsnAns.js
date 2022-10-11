import React, { useState } from "react";
import "./QsnAns.css";
import qsnBgImg from "../../media/image/background-img.jpg";
const QsnAns = ({ questionAns, index, nameTopic }) => {
  // console.log("kkkk", nameTopic);
  const [answer, setAnswer] = useState("");
  console.log(answer);
  const { options, id, question, correctAnswer } = questionAns;
  const handleSelect = (event) => {
    console.log("clicked", event.target.value);
    // setAnswer()
  };
  return (
    <div
      style={{ backgroundImage: `url('${qsnBgImg}')` }}
      className="qsn-container m-10 p-7 rounded-lg shadow-2xl text-[#f9f8f0]"
    >
      <p className="text-2xl mt-7 mb-10">
        Quiz {index + 1}: {question}
      </p>
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
    </div>
  );
};

export default QsnAns;
