import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

function sendEmail(username: string, email: string) {
  
  emailjs.init("_59c55TtwUaLLBZb2");
  
  const e = {
    name: username,
    email: email,
    message: "Veuillez confirmer votre adresse email"
  };

  emailjs.send('service_ndza62c', 'template_wkm63km', e)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
};

export { sendEmail }