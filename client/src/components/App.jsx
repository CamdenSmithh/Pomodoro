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
      <Settings settings={settings} />
    </div>
  );
}
