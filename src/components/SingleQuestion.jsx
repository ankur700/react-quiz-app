import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

const SingleQuestion = ({
  data,
  setIsCorrect,
  score,
  setScore,
  setShowScore,
  state,
  setState,
  Index,
}) => {
  const { id, question, image, options, answer, explanation } = data;

  const [showAnswer, setShowAnswer] = useState(false);

  const [attempted, setAttempted] = useState(false);

  const playSound = index => {
    const successAudio = new Audio(
      '/assets/sounds/mixkit-achievement-bell-600.wav'
    );
    const failAudio = new Audio('/assets/sounds/Incorrect-sound-effect.mp3');
    index === answer ? successAudio.play() : failAudio.play();
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    let target = e.currentTarget;
    resetOptions();

    if (!attempted) {
      setAttempted(true);
      playSound(index);

      if (index === answer) {
        setIsCorrect(true);
        setState([
          ...state,
          {
            id: id,
            attempted: true,
            isCorrect: true,
          },
        ]);
        target.classList.add('success');
        setScore(score + 1);
      } else {
        setIsCorrect(false);
        setState([
          ...state,
          {
            id: id,
            attempted: true,
            isCorrect: false,
          },
        ]);
        target.classList.add('error');
      }
    } else if (attempted && index === answer) {
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
    let currentElem = document.getElementById(`question-${id}`);
    let nextElem = document.getElementById(`question-${id + 1}`);
    currentElem?.classList.toggle('hidden');
    currentElem?.classList.toggle('active');
    nextElem?.classList.toggle('hidden');
    nextElem?.classList.toggle('active');
    if (!nextElem) {
      setShowScore(true);
    }
    reset();
  };

  const handlePrev = (e, id) => {
    e.preventDefault();
    let currentElem = document.getElementById(`question-${id}`);
    let prevElem = document.getElementById(`question-${id - 1}`);
    currentElem?.classList.toggle('hidden');
    currentElem?.classList.toggle('active');
    prevElem?.classList.toggle('hidden');
    prevElem?.classList.toggle('active');
    reset();
  };

  return (
    <>
      <div
        className={
          Index !== 1
            ? 'hidden single__question-wrapper'
            : 'active single__question-wrapper'
        }
        id={'question-' + Index}
        key={id}
      >
        <h3 className='question__title'>{question}</h3>
        <img
          className='question__image'
          src={'/assets/images/' + image}
          alt={'question-' + id}
        />

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
                ></li>
              </>
            );
          })}
        </ul>
        <div className='question__card-footer'>
          <div key={answer} className='answer'>
            <button
              className=' sidebar__icon clay'
              title='Check Answer'
              aria-label='answer'
              onClick={e => {
                e.preventDefault();
                setShowAnswer(!showAnswer);
              }}
              disabled={attempted ? false : true}
            >
              <FaQuestion fill={attempted ? '#fff' : '#000'} />
            </button>
          </div>
          <div className='pagination__holder'>
            <button
              className={
                Index !== 1
                  ? 'clay pagination__button'
                  : 'clay pagination__button hidden'
              }
              onClick={e => handlePrev(e, Index)}
            >
              Prev
            </button>

            <button
              className='clay pagination__button'
              onClick={e => handleNext(e, Index)}
            >
              Next
            </button>
          </div>
        </div>
        <div className={showAnswer ? 'answer__detail clay' : 'hidden'}>
          <h3 className=''>Answer: option {answer + 1}</h3>
          <div dangerouslySetInnerHTML={{ __html: explanation }}></div>
        </div>
      </div>
    </>
  );
};

export default SingleQuestion;
