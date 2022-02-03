import React, { useEffect, useState } from 'react';
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
  const [Questions, setQuestions] = useState([]);
  const [fetchedQuestions, setFetchedQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState('0');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [state, setState] = useState([]);
  const [users, setUsers] = useState([]);

  //Switch the Theme

  const switchTheme = theme => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  const setQuestionsArray = value => {
    setQuestionCount(value);
  };

  //Shuffle the provided array passed as parameter

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    setQuestions([...array]);
  }

  useEffect(() => {
    fetch('/api/questions')
      .then(response => response.json())
      .then(json => setFetchedQuestions(json.questions));
    fetch('/api/users')
      .then(response => response.json())
      .then(json => setUsers(json.users));
  }, []);

  useEffect(() => {
    let questions = fetchedQuestions.slice(0, parseInt(questionCount));
    shuffle(questions);
  }, [questionCount]);

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
        setQuestionsArray={setQuestionsArray}
        setShowScore={setShowScore}
        state={state}
      />
    </div>
  );
};

export default Layout;
