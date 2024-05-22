import React from 'react';

export default function FinishScreen({
  points,
  maxPossiblePoints,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)}% )
      </p>
      <button
        onClick={() => {
          dispatch({ type: 'restartQuiz' });
        }}
        className="btn btn-ui"
      >
        {' '}
        Restart Quiz
      </button>
    </>
  );
}
