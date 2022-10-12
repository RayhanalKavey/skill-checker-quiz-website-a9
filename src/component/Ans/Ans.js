import React from "react";

const Ans = ({ option, id, handleSelect }) => {
  return (
    <div className="flex items-center gap-3 mb-5">
      <input
        onClick={() => handleSelect(option, id)}
        type="radio"
        name={id}
      ></input>
      <label htmlFor="">{option}</label>
    </div>
  );
};

export default Ans;
