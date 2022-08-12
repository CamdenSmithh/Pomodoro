import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  h2: {
    color: '#dfe1e6',
    fontSize: '40px',
    marginBottom: '10px',
  },
  timeBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f88778',
    width: '40%',
    border: 'solid',
    borderRadius: '10px',
  },
  timeContainer: {
    fontSize: '80px',
    marginBottom: '100px',
    marginTop: '20px',
    fontFamily: 'arial',
  },
  time: {
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '60px',
    width: '50%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '100px',
    height: '40px',
    fontSize: '30px',
    cursor: 'pointer',
    backgroundColor: '#d0d2d6',
  },
  session: {
    color: '#d0d2d6',
    fontSize: '30px',
    margin: '20px',
  },
};

export default function Timer() {
  const [second, setSecond] = useState('10');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(10);
  const [onBreak, setOnBreak] = useState(false);
  const [session, setSession] = useState(1);

  function stopTimer() {
    setIsActive(false);
    setCounter(1500);
    setSecond('00');
    setMinute('25');
  }

  function buildTimer(isOnBreak) {
    if (isOnBreak) {
      setCounter(5);
      setSecond('05');
      setMinute('00');
    } else {
      setCounter(10);
      setSecond('10');
      setMinute('00');
      setSession(session + 1);
    }
  }

  useEffect(() => {
    let intervalId;

    if (counter < -1) {
      setIsActive(false);
      setOnBreak(!onBreak);
      buildTimer(!onBreak);
    }

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.h2}>
        {onBreak ? 'Break Time!' : 'Study Time!'}
      </h2>
      <div style={styles.timeBox}>
        <div className="time" style={styles.timeContainer}>
          <span className="minute" style={styles.time}>{minute}</span>
          <span>:</span>
          <span className="second" style={styles.time}>{second}</span>
        </div>
        <div className="buttons" style={styles.buttonContainer}>
          <button type="button" onClick={() => setIsActive(!isActive)} className="start" style={styles.button}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button type="button" onClick={stopTimer} className="reset" style={styles.button}>Reset</button>
        </div>
      </div>
      <div style={styles.session}>
        {`You're on session number ${session}!`}
      </div>
      {counter}
    </div>
  );
}
