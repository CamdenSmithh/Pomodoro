import React, { useState } from 'react';
import Timer from './Timer.jsx';

const styles = {
  container: {
    fontFamily: 'futura',
  },
  h1: {
    borderBottom: 'solid',
    fontSize: '50px',
    marginTop: '10px',
  },
};

export default function App() {
  const [settings, setSettings] = (false);

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Pomodoro App</h1>
      <Timer settings={settings} />
    </div>
  );
}
