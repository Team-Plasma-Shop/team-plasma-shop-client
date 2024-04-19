import { useEffect } from "react";
import { PlasmaLogo } from "../assets/PlasmaLogo";
import { veriefiedUser } from "../services/verifiedUser";
import { getCurrentUserInfo } from "../utils/getCurrentUserInfo";
import { useNavigate } from "react-router-dom";

function VerificationPage() {
  const token = localStorage.getItem("email-token");
  const tokenFromUrl = window.location.href.split("/email-verification/")[1];
  const navigate = useNavigate()

  useEffect(() => {
    checkToken();
  }, []);

  async function checkToken() {
    if (localStorage.getItem("email-token") && tokenFromUrl) {
      console.log(tokenFromUrl, token);

      if (tokenFromUrl === token) {
        localStorage.removeItem("email-token");      
        const user = await getCurrentUserInfo();
        
        if (user && user.id) {
          const response = await veriefiedUser(user.id)
          
          if (response.ok) {
            navigate("/")
          } else {
            console.log("Error");
            
          }
          
        }
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