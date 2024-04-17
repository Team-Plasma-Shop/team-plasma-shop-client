import { Component } from "react";

import { PlasmaLogo } from "../assets/PlasmaLogo";

import LoginForm from "../components/loginForm";

export default class LoginPage extends Component {
  public render() {
    return (
      <div className="flex flex-row justify-between">
        <div className="mt-28 mx-auto">
          <h1 className="text-5xl mb-10">Connexion</h1>
          <LoginForm />
        </div>

        <PlasmaLogo />
      </div>
    );
  }
}