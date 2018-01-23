import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Progress from 'material-ui/CircularProgress';

export default ({ loading, body, onChange, onSubmit, disabled }) => {
  return (
    <div>
      <TextField
        floatingLabelText="Comment"
        multiLine={true}
        rows={2}
        rowsMax={4}
        value={body}
        onChange={onChange}
      />
      <br />
      {loading ? (
        <Progress />
      ) : (
        <FlatButton
          label="Add Comment"
          disabled={disabled}
          onClick={onSubmit}
        />
      )}
    </div>
  );
};
