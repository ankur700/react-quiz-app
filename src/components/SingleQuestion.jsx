import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

const SingleQuestion = ({
  data,
  setIsCorrect,
  score,
  setScore,
  lastItem,
  firstItem,
  setShowScore,
  state,
  setState,
  isCorrect,
}) => {
  const { id, question, image, options, answer, explanation } = data;

  const [showAnswer, setShowAnswer] = useState(false);

  const [attempted, setAttempted] = useState(false);

  const handleClick = (e, index) => {
    e.preventDefault();
    let target = e.currentTarget;
    resetOptions();

    if (!attempted) {
      setAttempted(true);
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
    document.getElementById(`question-${id}`)?.classList.toggle('hidden');
    document.getElementById(`question-${id}`)?.classList.toggle('active');
    document.getElementById(`question-${id + 1}`)?.classList.toggle('hidden');
    document.getElementById(`question-${id + 1}`)?.classList.toggle('active');
    if (id === lastItem.id) {
      setShowScore(true);
    }
    reset();
  };

  const handlePrev = (e, id) => {
    e.preventDefault();
    document.getElementById(`question-${id}`)?.classList.toggle('hidden');
    document.getElementById(`question-${id}`)?.classList.toggle('active');
    document.getElementById(`question-${id - 1}`)?.classList.toggle('hidden');
    document.getElementById(`question-${id - 1}`)?.classList.toggle('active');
    reset();
  };

  return (
    <>
      <div
        className={
          id !== firstItem.id
            ? 'hidden single__question-wrapper'
            : 'active single__question-wrapper'
        }
        id={'question-' + id.toString()}
      >
        <h3 className='question__title'>
          {id}: {question}
        </h3>
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
                id !== firstItem.id
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
          <h3 className=''>Answer: option {answer + 1}</h3>
          <div dangerouslySetInnerHTML={{ __html: explanation }}></div>
        </div>
      </div>
    </>
  );
};

export default SingleQuestion;
