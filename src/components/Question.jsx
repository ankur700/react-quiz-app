import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

const Question = ({
  data,
  setIsCorrect,
  score,
  setShowScore,
  setScore,
  questionState,
  fetchSingleQuestion,
  idArray,
  setShowQuestion,
  user,
  setUser,
  setPlayAgain,
  isLoading,
  setIsLoading,
}) => {
  const { id, question, image, options, answer, explanation } = data;

  const [showAnswer, setShowAnswer] = useState(false);
  const [isAllAttempted, setIsAllAttempted] = useState(false);

  let questionIndex = questionState.findIndex(item => item.id === id);

  const playSound = index => {
    const successAudio = new Audio(
      '/assets/sounds/mixkit-achievement-bell-600.wav'
    );
    const failAudio = new Audio('/assets/sounds/Incorrect-sound-effect.mp3');
    index + 1 === answer ? successAudio.play() : failAudio.play();
  };

  const setQuestionStates = index => {
    questionState[questionIndex].attempted = true;
    questionState[questionIndex].isCorrect =
      index + 1 === answer ? true : false;
  };

  const setUserData = (newscore, newuser) => {
    const hasPrevScores = newuser.bestScores.length > 0 ? true : false;
    const prevScores = hasPrevScores ? [...user.bestScores] : [];

    const newBestScores = [...prevScores, newscore]
      .sort((a, b) => b - a)
      .slice(0, 3);

    const userData = {
      userName: newuser.userName.toString(),
      bestScores: [...newBestScores],
    };
    setUser({ ...userData });
  };

  const check_if_all_attempted = () => {
    const array = questionState.filter(item => item.attempted === false);
    if (array.length === 0) {
      setIsAllAttempted(true);
    }
  };

  const getScore = e => {
    e.preventDefault();
    if (isAllAttempted) {
      setShowQuestion(false);
      setShowScore(true);
    }
  };

  const checkAnswer = (e, index) => {
    e.preventDefault();
    let target = e.currentTarget;
    resetOptions();

    if (questionState[questionIndex].attempted === false) {
      setQuestionStates(index);
      playSound(index);

      if (questionIndex !== questionState.length - 1) {
        if (index + 1 === answer) {
          setIsCorrect(true);
          target.classList.add('success');
          setScore(score + 1);
        } else {
          setIsCorrect(false);
          target.classList.add('error');
        }
      } else if (questionIndex === questionState.length - 1) {
        setPlayAgain(false);
        if (index + 1 === answer) {
          setIsCorrect(true);
          target.classList.add('success');
          setScore(score + 1);
          setUserData(score + 1, user);
        } else {
          setIsCorrect(false);
          target.classList.add('error');
          setUserData(score, user);
        }
      }
    } else if (
      questionState[questionIndex].attempted === true &&
      index + 1 === answer
    ) {
      target.classList.add('success');
    } else {
      target.classList.add('error');
    }

    check_if_all_attempted();
  };

  const resetOptions = () => {
    let options = Array.from(document.getElementsByClassName('option'));
    options.forEach(option => {
      if (option.classList.contains('success')) {
        option.classList.remove('success');
      } else if (option.classList.contains('error')) {
        option.classList.remove('error');
      }
    });
  };

  const reset = () => {
    setIsCorrect(false);
    resetOptions();
  };

  const handleNext = (e, id) => {
    e.preventDefault();
    let index = idArray.indexOf(id);
    let newId = idArray[index + 1];

    if (newId) {
      setIsLoading(!isLoading);
      fetchSingleQuestion(`${parseInt(newId)}`);
    }
    reset();
  };

  const handlePrev = (e, id) => {
    e.preventDefault();
    let index = idArray.indexOf(id);
    let newId = idArray[index - 1];
    setIsLoading(!isLoading);
    fetchSingleQuestion(`${parseInt(newId)}`);
    reset();
  };

  return (
    <>
      <div className='single__question-wrapper' key={id}>
        <h3 className='question__title'>{question}</h3>
        {image !== '' && (
          <img
            className='question__image'
            src={'/assets/images/' + image}
            alt={'question-' + id}
          />
        )}

        <ul className='options__list'>
          {options?.map((option, index) => {
            return (
              <>
                <li
                  key={answer}
                  id={index.toString()}
                  className='option clay'
                  onClick={e => checkAnswer(e, index)}
                  dangerouslySetInnerHTML={{ __html: option }}
                ></li>
              </>
            );
          })}
        </ul>
        <div className='question__card-footer'>
          <div key={answer} className='answer'>
            <button
              className=' answer__icon clay'
              title='Check Answer'
              aria-label='answer'
              onClick={e => {
                e.preventDefault();
                setShowAnswer(!showAnswer);
              }}
              disabled={
                questionState[questionIndex ? questionIndex : 0].attempted
                  ? false
                  : true
              }
            >
              <FaQuestion />
            </button>
          </div>
          <div className='pagination__holder'>
            <button
              className={
                id !== idArray[0]
                  ? 'clay pagination__button'
                  : 'clay pagination__button hidden'
              }
              onClick={e => handlePrev(e, id)}
            >
              Prev
            </button>

            <button
              className={
                id !== idArray[idArray.length - 1]
                  ? 'clay pagination__button'
                  : 'clay pagination__button hidden'
              }
              onClick={e => handleNext(e, id)}
            >
              Next
            </button>
            <button
              className={
                isAllAttempted
                  ? 'clay pagination__button'
                  : 'clay pagination__button hidden'
              }
              onClick={e => getScore(e)}
            >
              Score
            </button>
          </div>
        </div>
        <div className={showAnswer ? 'answer__detail clay' : 'hidden'}>
          <h3 className=''>Answer: option {answer}</h3>
          <div dangerouslySetInnerHTML={{ __html: explanation }}></div>
        </div>
      </div>
    </>
  );
};

export default Question;
