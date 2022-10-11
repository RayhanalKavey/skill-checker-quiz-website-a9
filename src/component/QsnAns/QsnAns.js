import React from "react";

const QsnAns = ({ questionAns }) => {
  console.log(questionAns);
  const { options, id, question, correctAnswer } = questionAns;
  // console.log(correctAnswer);
  return (
    <div>
      <p>Qsn and ans will be displayed here.</p>
    </div>
  );
};

export default QsnAns;
