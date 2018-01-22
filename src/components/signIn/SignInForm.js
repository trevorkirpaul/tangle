import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

const Wrapper = styled.form``;
const InputWrapper = styled.div``;

export const capFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorEmail: '',
      errorPassword: '',
    };
  }
  handleOnChange = e => {
    const fieldName = e.target.name;
    const value = e.target.value;
    const FieldName = capFirstLetter(fieldName);
    const errorFieldName = `error${FieldName}`;
    this.setState(() => ({
      [fieldName]: value,
      [errorFieldName]: '',
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    // if field is empty
    // set error state and update field to show error
    email === '' && this.setState(() => ({ errorEmail: 'Required' }));
    password === '' && this.setState(() => ({ errorPassword: 'Required' }));

    if (email !== '' && password !== '') {
      this.props.handleSignIn({ email, password });
    }
  };
  render() {
    return (
      <Wrapper>
        <InputWrapper>
          <TextField
            type="text"
            name="email"
            floatingLabelText="email"
            errorText={this.state.errorEmail}
            onChange={this.handleOnChange}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            type="password"
            name="password"
            floatingLabelText="password"
            errorText={this.state.errorPassword}
            onChange={this.handleOnChange}
          />
        </InputWrapper>
        <RaisedButton
          primary={true}
          onClick={this.handleSubmit}
          label="Sign In"
        />
      </Wrapper>
    );
  }
}
