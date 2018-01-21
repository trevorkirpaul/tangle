import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions/auth';

import styled from 'styled-components';

const Input = styled.input`
  display: block;
  margin: 5px;
`;

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      favoriteColor: '',
      favoriteAnimal: '',
    };
  }
  handleOnChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    this.setState(() => ({
      [fieldName]: fieldValue,
    }));
  };
  handleSubmit = () => {
    this.props.signUp(this.state);
  };
  render() {
    return (
      <div>
        <Input
          type="text"
          name="email"
          placeholder="email"
          onChange={this.handleOnChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleOnChange}
        />
        <Input
          type="text"
          name="firstName"
          placeholder="firstName"
          onChange={this.handleOnChange}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="lastName"
          onChange={this.handleOnChange}
        />
        <Input
          type="text"
          name="favoriteColor"
          placeholder="favorite color"
          onChange={this.handleOnChange}
        />
        <Input
          type="text"
          name="favoriteAnimal"
          placeholder="favorite animal"
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleSubmit}>Sign Up</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  signUp: fields => dispatch(signUp(fields)),
});

export default connect(null, mapDispatchToProps)(SignUp);
