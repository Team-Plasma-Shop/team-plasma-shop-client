import { useEffect } from "react";
import { PlasmaLogo } from "../assets/PlasmaLogo";

function VerificationPage() {
  const token = localStorage.getItem("email-token");
  const tokenFromUrl = window.location.href.split("/email-verification/")[1];

  useEffect(() => {
    checkToken();
  }, []);

  function checkToken() {
    if (localStorage.getItem("email-token") && tokenFromUrl) {
      console.log(tokenFromUrl, token);

      if (tokenFromUrl === token) {
        localStorage.removeItem("email-token");
  
        // TODO: verify user and redirect
      }
    }
  }

  return (
    <div className="flex flex-row justify-between">
      <div className="mt-28 mx-auto flex flex-col">
        <span className="text-4xl pr-24 mb-10">Veuillez consulter vos <span className="danger-glow-text">emails</span></span>

        <span className="item-center text-lg">Nous vous avons envoyé un mail à l'adresse suivante :</span>
        
        {/* TODO: email dynamix !!!!! */}
        <span className="secondary-glow-text text-lg">example@mail.com</span>

      </div>

      <PlasmaLogo />
    </div>
  );
}

export default VerificationPage;