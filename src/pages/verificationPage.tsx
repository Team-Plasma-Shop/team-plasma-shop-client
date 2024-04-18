import { PlasmaLogo } from "../assets/PlasmaLogo";

function verificationPage() {
  return (
    <div className="flex flex-row justify-between">
      <div className="mt-28 mx-auto flex flex-col">
        <span className="text-4xl pr-24 mb-10">Veuillez consulter vos <span className="danger-glow-text">emails</span></span>

        <span className="item-center text-lg">Nous vous avons envoyé un mail à l'adresse suivante :</span>
        <span className="secondary-glow-text text-lg">example@mail.com</span>

        
      </div>

      <PlasmaLogo />
    </div>
  );
}

export default verificationPage