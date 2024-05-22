import React from 'react';

export default function NextButton({
  dispatch,
  answer,
  numOfQuestions,
  index,
}) {
  if (answer === null) return null;

  if (index < numOfQuestions - 1)
    return (
      <div>
        <button
          onClick={() => dispatch({ type: 'nextQuestion' })}
          className="btn btn-ui"
        >
          Next
        </button>
      </div>
    );
  if (index === numOfQuestions - 1)
    return (
      <div>
        <button
          onClick={() => dispatch({ type: 'finishQuiz' })}
          className="btn btn-ui"
        >
          Finish
        </button>
      </div>
    );
}
