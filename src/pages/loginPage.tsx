import { PlasmaLogo } from "../assets/PlasmaLogo";

import LoginForm from "../components/loginForm";

function LoginPage() {
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

export default LoginPage