import React, { useState } from 'react';
import Question from './Question';
import Sidebar from './Sidebar';
import useLocalStorage from '../useLocalStorage';
import Header from './Header';
import { Data } from '../lib/data';

const Layout = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const [questionCount, setQuestionCount] = useState('0');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [state, setState] = useState([]);
  const switchTheme = theme => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  const setQuestions = value => {
    setQuestionCount(value);
  };

  const Questions = Data.slice(0, parseInt(questionCount));

  return (
    <div className='App' data-theme={theme}>
      <Header theme={theme} switchTheme={switchTheme} />
      <Question
        Questions={Questions}
        score={score}
        setScore={setScore}
        showScore={showScore}
        setShowScore={setShowScore}
        state={state}
        setState={setState}
      />
      <Sidebar
        Questions={Questions}
        questionCount={questionCount}
        setQuestions={setQuestions}
        setShowScore={setShowScore}
        state={state}
      />
    </div>
  );
};

export default Layout;
