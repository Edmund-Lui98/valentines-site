import React, { useState } from 'react';
import './App.css'
import FinalQuestion from './Questions/FinalQuestion';
import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';
import Question4 from './Questions/Question4';
import Question5 from './Questions/Question5';

export default function App() {
  const [tracker, setTracker] = useState(0);

  function moveOn() {
    setTracker(tracker + 1)
  }

  return (
    <>
      {tracker === 0 ? <Question1 moveOn={moveOn} /> : null}
      {tracker === 1 ? <Question2 moveOn={moveOn} /> : null}
      {tracker === 2 ? <Question3 moveOn={moveOn} /> : null}
      {tracker === 3 ? <Question4 moveOn={moveOn} /> : null}
      {tracker === 4 ? <Question5 moveOn={moveOn} /> : null}
      {tracker === 5 ? <FinalQuestion /> : null}
    </>
  )
};