import { Component } from 'react';

import SignupForm from '../components/signupForm';

export default class SignupPage extends Component {
  public render() {
    return (
      <div>
        <h1>Faison affaire !</h1>
        <SignupForm />
      </div>
    );
  }
}