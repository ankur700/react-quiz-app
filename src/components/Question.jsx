import React, { useState, useRef, useEffect } from 'react';
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
}) => {
  const { id, question, image, options, answer, explanation } = data;

  const [showAnswer, setShowAnswer] = useState(false);

  let questionIndex =
    questionState.findIndex(item => item.id === id) !== -1
      ? questionState.findIndex(item => item.id === id)
      : 0;

  const playSound = index => {
    const successAudio = new Audio(
      '/assets/sounds/mixkit-achievement-bell-600.wav'
    );
    const failAudio = new Audio('/assets/sounds/Incorrect-sound-effect.mp3');
    index + 1 === answer ? successAudio.play() : failAudio.play();
  };

  const selectedRef = useRef(null);

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

  const handleClick = (e, index) => {
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

          setTimeout(() => {
            setShowQuestion(false);
            setShowScore(true);
          }, 1000);
        } else {
          setIsCorrect(false);
          target.classList.add('error');
          setUserData(score, user);

          setTimeout(() => {
            setShowQuestion(false);
            setShowScore(true);
          }, 1000);
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
      fetchSingleQuestion(`${parseInt(newId)}`);
    }
    reset();
  };

  const handlePrev = (e, id) => {
    e.preventDefault();
    let index = idArray.indexOf(id);
    let newId = idArray[index - 1];
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
                  onClick={e => handleClick(e, index)}
                  dangerouslySetInnerHTML={{ __html: option }}
                  ref={selectedRef}
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
