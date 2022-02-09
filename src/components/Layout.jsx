import React, { useEffect, useState, useCallback, useRef } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import useLocalStorage from '../useLocalStorage';
import Header from './Header';
import Question from './Question';
import ReactCanvasConfetti from 'react-canvas-confetti';
import Start from './Start';
import ScoredCard from './ScoredCard';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

const Layout = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const defaultUserSate = {
    userName: 'johnyPapa',
    data: [],
  };

  const [Questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questionState, setQuestionState] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [user, setUser] = useLocalStorage('user', { ...defaultUserSate });
  const [idArray, setIdArray] = useState([]);

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
    return array;
  }

  const fetchSingleQuestion = id => {
    fetch(`/api/questions/${id}`)
      .then(response => response.json())
      .then(json => setQuestion({ ...json.question }));
  };

  const getIdArray = array => {
    let newArray = [];
    let stateArray = [];

    array.forEach(item => {
      newArray.push(item.id);
      stateArray.push({ id: item.id, attempted: false, isCorrect: false });
    });
    setIdArray([...newArray]);
    setQuestionState([...stateArray]);
  };

  useEffect(() => {
    if (questionCount > 0) {
      fetch('/api/questions')
        .then(response => response.json())
        .then(json =>
          setQuestions(
            Array.from(shuffle(json.questions)).slice(0, questionCount)
          )
        );
    }
  }, [questionCount]);

  useEffect(() => {
    if (Questions.length > 0) {
      fetchSingleQuestion(Questions[0].id);
      getIdArray(Questions);
      setShowQuestion(true);
    }
  }, [Questions]);

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback(instance => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(400 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    if (!isCorrect) return;
    if (isCorrect) {
      fire();
    }
  }, [fire, isCorrect]);

  return (
    <div className='App' data-theme={theme}>
      <Header theme={theme} switchTheme={switchTheme} />
      <Main>
        {showStart && (
          <Start
            user={user}
            setUser={setUser}
            setQuestionCount={setQuestionCount}
            setGameStarted={setGameStarted}
            setShowStart={setShowStart}
          ></Start>
        )}
        {showScore && (
          <ScoredCard>
            <h3>
              You scored {score} out of {Questions.length}
            </h3>
          </ScoredCard>
        )}
        {question !== null && showQuestion && (
          <Question
            setIsCorrect={setIsCorrect}
            data={question}
            key={question.id}
            score={score}
            setShowScore={setShowScore}
            setScore={setScore}
            questionState={questionState}
            setQuestionState={setQuestionState}
            fetchSingleQuestion={fetchSingleQuestion}
            idArray={idArray}
            setShowQuestion={setShowQuestion}
            setUser={setUser}
            user={user}
          />
        )}

        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      </Main>
      {gameStarted && (
        <Sidebar
          Questions={Questions}
          questionCount={questionCount}
          setQuestionsArray={setQuestionsArray}
          setShowScore={setShowScore}
          questionState={questionState}
          setShowQuestion={setShowQuestion}
          fetchSingleQuestion={fetchSingleQuestion}
        />
      )}
    </div>
  );
};

export default Layout;
