import React, { useState, useCallback, useRef, useEffect } from 'react';
import SingleQuestion from './SingleQuestion';
import { Data } from '../lib/data';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

const Question = ({ Questions }) => {
  const [checkAnswer, setCheckAnswer] = useState(false);

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
    if (!checkAnswer) return;
    if (checkAnswer) {
      fire();
    }
  }, [fire, checkAnswer]);

  return (
    <div className=' question__card clay'>
      {Questions.length > 0 ? (
        Questions.map(quest => {
          return (
            <SingleQuestion
              setCheckAnswer={setCheckAnswer}
              data={quest}
              checkAnswer={checkAnswer}
              key={'0' + quest.id}
            />
          );
        })
      ) : (
        <h3 className='no-questions'>
          No Questions Yet! Please select desired no. of Questions.
        </h3>
      )}
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </div>
  );
};

export default Question;
