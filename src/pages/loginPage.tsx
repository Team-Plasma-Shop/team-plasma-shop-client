import { Component } from 'react';

import LoginForm from '../components/loginForm';

export default class LoginPage extends Component {
  public render() {
    return (
      <div>
        <h1>Connexion</h1>
        <LoginForm />
      </div>
    );
  }
}