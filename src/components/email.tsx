import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const Email = (name: string, email: string, message: string) => {

  emailjs.init("_59c55TtwUaLLBZb2");

  const e = {
    name: name,
    email: email,
    message: message
  };

  useEffect(() => {
    sendEmail();
  }, []);

  function sendEmail() {
    emailjs.send('service_ndza62c', 'template_wkm63km', e)
      .then((result) => {
        console.log("Email sent");
      }, (error) => {
        console.log(error.text);
      });
  };
};

export default Email;