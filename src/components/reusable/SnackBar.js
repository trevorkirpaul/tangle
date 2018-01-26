import React from 'react';
import SnackBar from 'material-ui/Snackbar';

export default ({ snackbarOpen, message, handleSnackbarClose }) => {
  return (
    <SnackBar
      open={snackbarOpen}
      message={message}
      autoHideDuration={4000}
      onRequestClose={handleSnackbarClose}
    />
  );
};
