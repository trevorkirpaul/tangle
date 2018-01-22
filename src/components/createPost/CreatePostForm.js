import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default ({ titleOnChange, title, onChange, value, handleSubmit }) => {
  return (
    <div>
      <TextField
        floatingLabelText="post title"
        onChange={titleOnChange}
        value={title}
      />
      <br />
      <TextField
        floatingLabelText="Post Contents"
        multiLine={true}
        rows={4}
        onChange={onChange}
        value={value}
      />
      <br />
      <FlatButton label="Submit Post" onClick={handleSubmit} />
    </div>
  );
};
