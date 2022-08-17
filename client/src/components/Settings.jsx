import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const styles = {
  modalContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%',
    backgroundColor: '#EDEDE9',
    padding: '50px',
    height: '50%',
    width: '20%',
    zIndex: 1000,
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7',
    zIndex: 1000,
  },
  modalItems: {
    // overflowY: 'scroll',
    maxWidth: '100%',
    maxHeight: '40vh',
    padding: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  xBtn: {
    marginTop: '2px',
    marginRight: '2px',
    position: 'absolute',
    top: '0',
    right: '0',
    cursor: 'pointer',
  },
  cancelBtn: {
    cursor: 'pointer',
  },
  submitBtn: {
    cursor: 'pointer',
  },
};

export default function Settings({ settings, setSettings }) {
  if (!settings) return null;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.minutes.value);
    console.log(event.target.seconds.value);
    // setSettings(false);
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, [settings]);

  return (
    <>
      <div style={styles.modalOverlay} />
      <div style={styles.modalContainer}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <button type="button" onClick={() => { setSettings(false); }} style={styles.xBtn}>
            X
          </button>
          <div style={styles.modalItems}>
            Minutes:
            <input type="number" name="minutes" />
            <br />
            <br />
            Seconds:
            <input type="number" name="seconds" />
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitBtn}>
              Submit
            </button>
            <button type="button" onClick={() => { setSettings(false); }} style={styles.cancelBtn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

Settings.propTypes = {
  settings: PropTypes.bool.isRequired,
};
