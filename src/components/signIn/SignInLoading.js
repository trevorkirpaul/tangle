import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Progress from 'material-ui/CircularProgress';

export default ({
  open,
  disabled,
  failed,
  handleContinue,
  handleClose,
  statusMessage,
  loading,
}) => {
  const actions = [
    <FlatButton
      label="continue"
      disabled={disabled}
      primary={true}
      onClick={handleContinue}
    />,
  ];
  const failedActions = [
    <FlatButton label="okay" primary={true} onClick={handleClose} />,
  ];
  return (
    <Dialog
      title={statusMessage}
      actions={failed ? failedActions : actions}
      modal={true}
      open={open}
    >
      {loading ? <Progress /> : <p>{statusMessage}</p>}
    </Dialog>
  );
};
