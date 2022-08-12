import React from 'react';
import Timer from './Timer.jsx';

const styles = {
  container: {
  },
  h1: {
  },
};

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Pomodoro App</h1>
      <Timer />
    </div>
  );
}
