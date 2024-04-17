import { Component } from "react";

import { PlasmaLogo } from "../assets/PlasmaLogo";

import SignupForm from "../components/signupForm";

export default class SignupPage extends Component {
  public render() {
    return (
      <div className="flex flex-row justify-between">
        <div className="mt-28 mx-auto">
          <h1 className="text-5xl mb-10">Faisons affaire !</h1>
          <SignupForm />
        </div>

        <PlasmaLogo />
      </div>
    );
  }
}