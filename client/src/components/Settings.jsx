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
    height: '75%',
    width: '50%',
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
    overflowY: 'scroll',
    maxWidth: '100%',
    maxHeight: '40vh',
    padding: '2rem',
  },
  xReviewBtn: {
    marginTop: '2px',
    marginRight: '2px',
    position: 'absolute',
    top: '0',
    right: '0',
    cursor: 'pointer',
  },
  cancelReviewBtn: {
    cursor: 'pointer',
  },
  submitReviewBtn: {
    cursor: 'pointer',
  },
};

export default function Settings({ settings }) {
  if (!settings) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, [settings]);

  return (
    <>
      <div style={styles.modalOverlay} />
      <div>
        <form>
          <button type="button">
            Cancel
          </button>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

Settings.propTypes = {
  settings: PropTypes.bool.isRequired,
};
