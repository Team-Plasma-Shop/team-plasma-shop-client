import { PlasmaLogo } from "../assets/PlasmaLogo";

import TOTPForm from "../components/totpForm";

function TOTPPage() {
  return (
    <div className="flex flex-row justify-between">
      <div className="mt-28 mx-auto">
        <h1 className="text-4xl mb-10">Entrer votre code</h1>
        <TOTPForm />
      </div>

      <PlasmaLogo />
    </div>
  );
}

export default TOTPPage