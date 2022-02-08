import React, { useState, useRef } from 'react';
import { FaQuestion } from 'react-icons/fa';

const Question = ({
  data,
  setIsCorrect,
  score,
  setScore,
  setShowScore,
  state,
  setState,
  fetchSingleQuestion,
  idArray,
}) => {
  const { id, question, image, options, answer, explanation } = data;

  const [showAnswer, setShowAnswer] = useState(false);

  const [attempted, setAttempted] = useState(false);
  const [QuestionState, setQuestionState] = useState(
    state.length > 0 ? [...state] : null
  );

  const playSound = index => {
    const successAudio = new Audio(
      '/assets/sounds/mixkit-achievement-bell-600.wav'
    );
    const failAudio = new Audio('/assets/sounds/Incorrect-sound-effect.mp3');
    index + 1 === answer ? successAudio.play() : failAudio.play();
  };

  const selectedRef = useRef(null);

  const handleClick = (e, index) => {
    e.preventDefault();
    let target = e.currentTarget;
    resetOptions();

    let x = QuestionState.includes(data);
    console.log(x);

    if (!attempted) {
      setAttempted(true);

      if (index + 1 === answer) {
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
      playSound(index);
    } else if (attempted && index + 1 === answer) {
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
    fetchSingleQuestion(`${parseInt(newId)}`);
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
              className=' sidebar__icon clay'
              title='Check Answer'
              aria-label='answer'
              onClick={e => {
                e.preventDefault();
                setShowAnswer(!showAnswer);
              }}
              disabled={attempted ? false : true}
            >
              <FaQuestion fill={attempted ? '#fff' : '#ddd'} />
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
              className='clay pagination__button'
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
