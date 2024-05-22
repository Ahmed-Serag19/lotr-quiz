import { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Timer from './Timer';
import questionsData from '../data/questions.json'; // Import the JSON file

const SECONDS_PER_QUESTION = 30;
const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  timeRemaining: 10,
  tick: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return {
        ...state,
        status: 'active',
        timeRemaining: state.questions.length * SECONDS_PER_QUESTION,
      };
    case 'finishQuiz':
      return { ...state, status: 'finished' };
    case 'restartQuiz':
      return {
        ...state,
        status: 'ready',
        index: 0,
        answer: null,
        points: 0,
      };
    case 'tick':
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
        status: state.timeRemaining === 0 ? 'finished' : state.status,
      };
    case 'newAnswer':
      // Ensure questions array is defined and state.index is within bounds
      if (state.questions && state.questions[state.index]) {
        const question = state.questions[state.index];
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
      }
      return state;
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null, // Reset the answer for the next question
      };
    default: {
      throw new Error('Unknown Action');
    }
  }
}

function App() {
  const [
    { timeRemaining, answer, questions, status, index, points },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  useEffect(() => {
    dispatch({ type: 'dataReceived', payload: questionsData });
  }, []);

  const handleStart = () => {
    dispatch({ type: 'start' });
  };

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen
            numOfQuestions={numOfQuestions}
            handleStart={handleStart}
          />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numQuestions={numOfQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              numOfQuestions={numOfQuestions}
              index={index}
            />
            <Timer
              timeRemaining={timeRemaining}
              dispatch={dispatch}
            />
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
