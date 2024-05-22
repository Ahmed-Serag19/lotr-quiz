import React, { useEffect } from 'react';

export default function Timer({ dispatch, timeRemaining }) {
  const mins = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
