import { PlasmaLogo } from "../assets/PlasmaLogo";

import SignupForm from "../components/signupForm";

function SignupPage() {
  return (
    <div className="flex flex-row justify-between">
      <div className="mt-28 mx-auto">
        <h1 className="text-4xl pr-8 mb-10">Faisons affaire !</h1>
        <SignupForm />
      </div>

      <PlasmaLogo />
    </div>
  );
}

export default SignupPage