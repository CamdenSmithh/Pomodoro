import React, { useState } from 'react';
import Timer from './Timer.jsx';
import Settings from './Settings.jsx';

const styles = {
  container: {
    fontFamily: 'futura',
  },
  topPageContainer: {
    display: 'flex',
    borderBottom: 'solid',
    marginTop: '20px',
  },
  h1: {
    fontSize: '50px',
    marginTop: '0px',
    marginBottom: '0px',
  },
  settingsButton: {
    height: '30px',
    float: 'right',
    marginLeft: '50%',
    backgroundColor: '#dad7cd',
    fontSize: '20px',
    cursor: 'pointer',
  },
  pomodoroTechnique: {
    marginTop: '45px',
    fontSize: '38px',
    textAlign: 'center',
  },
  pomodoroDescription: {
    textAlign: 'center',
    fontSize: '40px',
    marginTop: '150px',
    marginBottom: '100px',
  },
};

export default function App() {
  const [settings, setSettings] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.topPageContainer}>
        <h1 style={styles.h1}>
          Pomotempo
        </h1>
        <button type="button" style={styles.settingsButton} onClick={() => setSettings(true)}>
          Settings
        </button>
      </div>
      <Timer />
      <Settings settings={settings} setSettings={(state) => { setSettings(state); }} />
      <div style={styles.pomodoroTechnique}>
        What is the Pomodoro Technique?
        <br />
        |
        <br />
        V
      </div>
      <div style={styles.pomodoroDescription}>
        The Pomodoro Technique is a time management system that encourages people to work with the time they have—rather than against it. Using this method, you break your workday into 25-minute chunks separated by five-minute breaks. These intervals are referred to as pomodoros. After about four pomodoros, you take a longer break of about 15 to 20 minutes.
      </div>
    </div>
  );
}
