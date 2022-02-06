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
  const [fetchedQuestions, setFetchedQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState('0');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [state, setState] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [arrayOfId, setArrayOfId] = useState([]);
  const [showStart, setShowStart] = useState(true);
  const [user, setUser] = useLocalStorage('user', { ...defaultUserSate });
  const [gameStarted, setGameStarted] = useState(false);

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

  const getArrayOfId = () => {
    const array = [...Questions];
    const listOfIds = [];
    array.forEach(item => {
      listOfIds.push(item.id);
    });
    setArrayOfId([...listOfIds]);
  };

  useEffect(() => {
    fetch('/api/questions')
      .then(response => response.json())
      .then(json => setFetchedQuestions(json.questions));
    // fetch('/api/questions/5')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
  }, []);

  useEffect(() => {
    let questions = Array.from(shuffle(fetchedQuestions)).slice(
      0,
      parseInt(questionCount)
    );
    setQuestions(shuffle(questions));
    getArrayOfId();
  }, [gameStarted]);

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback(instance => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
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
        {Questions.length > 0 &&
          Questions.map((quest, index) => {
            return (
              <Question
                setIsCorrect={setIsCorrect}
                data={quest}
                key={quest.id}
                score={score}
                setScore={setScore}
                setShowScore={setShowScore}
                state={state}
                setState={setState}
                Index={index + 1}
              />
            );
          })}
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      </Main>
      {questionCount !== '0' && (
        <Sidebar
          Questions={Questions}
          questionCount={questionCount}
          setQuestionsArray={setQuestionsArray}
          setShowScore={setShowScore}
          state={state}
        />
      )}
    </div>
  );
};

export default Layout;
