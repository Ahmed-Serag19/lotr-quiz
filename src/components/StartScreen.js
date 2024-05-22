import React from 'react';

export default function StartScreen({ numOfQuestions, handleStart }) {
  return (
    <div className="start">
      <h2>Welcome to The Lotr Quiz!</h2>
      <h3>{numOfQuestions} Questions to rule them all</h3>
      <button className="btn btn-ui" onClick={handleStart}>
        Let's Start
      </button>
    </div>
  );
}
