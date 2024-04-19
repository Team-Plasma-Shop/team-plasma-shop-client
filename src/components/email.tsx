import emailjs from 'emailjs-com';
import cryptoRandomString from 'crypto-random-string';

function sendEmail(username: string, email: string) {
  const token = cryptoRandomString({ length: 32 }); 
  
  emailjs.init("_59c55TtwUaLLBZb2");
  
  const e = {
    name: username,
    email: email,
    message: "http://localhost:3000/email-verification/" + token
  };

  emailjs.send('service_ndza62c', 'template_wkm63km', e)
    .then((result) => {
      localStorage.setItem("email-token", token);
    }, (error) => {
    });
};

export { sendEmail }