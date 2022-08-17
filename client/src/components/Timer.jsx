import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  h2: {
    color: '#dad7cd',
    fontSize: '60px',
    marginBottom: '10px',
    marginTop: '10px',
    fontFamily: 'sans-sarif',
    fontWeight: 'lighter',
  },
  timeBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#3a5a40',
    width: '40%',
    border: 'solid',
    borderRadius: '10px',
  },
  timeContainer: {
    fontSize: '100px',
    marginBottom: '90px',
    marginTop: '20px',
  },
  time: {
    fontFamily: 'sans-sarif',
    fontWeight: 'bold',
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
    backgroundColor: '#dad7cd',
    fontFamily: 'sans-sarif',
    fontWeight: 'lighter',
  },
  session: {
    color: '#dad7cd',
    fontSize: '30px',
    margin: '20px',
    fontFamily: 'sans-sarif',
    fontWeight: 'lighter',
  },
};

export default function Timer() {
  const [second, setSecond] = useState('10');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(10);
  const [onBreak, setOnBreak] = useState(false);
  const [session, setSession] = useState(3);
  const [status, setStatus] = useState('Study');

  function stopTimer() {
    setIsActive(false);
    setCounter(1500);
    setSecond('00');
    setMinute('25');
  }

  function buildTimer(isOnBreak) {
    if (isOnBreak) {
      if (session % 4 === 0) {
        setStatus('Long Break');
        setCounter(5);
        setSecond('05');
        setMinute('00');
      } else {
        setStatus('Short Break');
        setCounter(3);
        setSecond('03');
        setMinute('00');
      }
    } else {
      setStatus('Study');
      setCounter(10);
      setSecond('10');
      setMinute('00');
      setSession(session + 1);
    }
  }

  useEffect(() => {
    let intervalId;

    if (isActive) {
      if (counter < -1) {
        setIsActive(false);
        setOnBreak(!onBreak);
        buildTimer(!onBreak);
      } else {
        if (onBreak) {
          setStatus('afk...');
        } else {
          setStatus('Studying...');
        }

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
    } else if (!isActive) {
      if (onBreak) {
        setStatus(`${status} Time!`);
      } else {
        setStatus('Study Time!');
      }
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.h2}>
        {status}
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
    </div>
  );
}
