import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NeoButton from "./button";
import { StatusCodes } from "http-status-codes";
import { sendEmail } from "./email";

interface InputData {
  username: string;
  email: string;
  password: string;
}

function SignupForm() {
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit } = useForm<InputData>();
  const [formData, setFormData] = useState<InputData>({
    username: "",
    email: "",
    password: ""
  });

  async function postData() {
    const data = {
      ...formData,
      verified: false,
      createdAt: new Date()
    }
  
    if (formData.password.length < 6 || !/[A-Z]/.test(formData.password) || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      setError("Le mot de passe doit contenir au moins 6 caractères, une majuscule et un caractère spécial");
      return;
    }
  
    if (formData.username.length < 4 || !/^[a-zA-Z0-9]+$/.test(formData.username)) {
      setError("Le nom d'utilisateur doit contenir uniquement des lettres et des chiffres sans espaces ni caractères spéciaux");
      return;
    }
    
    const response = await fetch(`${process.env.REACT_APP_API_ROUTE}users`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    // if (response.status === StatusCodes.CREATED) {
      if (response.status === StatusCodes.CREATED) {
      // Appeler sendEmail uniquement si l'enregistrement des données est réussi
      sendEmail(formData.username, formData.email);
    } else {
      // Gérer les erreurs en fonction de la réponse de l'API
      setError("Une erreur s'est produite lors de l'enregistrement des données.");
    }
  }  

  return (
    <div>
      <form onSubmit={handleSubmit(postData)}>
        <div className="flex flex-col gap-5">
          <div className="shadow-outerNeo rounded-md">
            <input
              type="text"
              required
              {...register("username", {
                onChange: (e) =>
                  setFormData({ ...formData, username: e.target.value }),
              })}
              placeholder="Nom d'utilisateur"
              className="rounded-md p-3 placeholder-white w-full text-sm placeholder-opacity-30 bg-inherit text-white border-0 outline-0 focus:border-b border-secondary"
            />
          </div>

          <div className="shadow-outerNeo rounded-md">
            <input
              type="email"
              required
              {...register("email", {
                onChange: (e) =>
                  setFormData({ ...formData, email: e.target.value }),
              })}
              placeholder="Email"
              className="rounded-md p-3 placeholder-white w-full text-sm placeholder-opacity-30 bg-inherit text-white border-0 outline-0 focus:border-b border-secondary"
            />
          </div>

          <div className="shadow-outerNeo rounded-md">
            <input
              type="password"
              required
              {...register("password", {
                onChange: (e) =>
                  setFormData({ ...formData, password: e.target.value }),
              })}
              placeholder="Mot de passe"
              className="rounded-md p-3 placeholder-white w-full text-sm placeholder-opacity-30 bg-inherit text-white border-0 outline-0 focus:border-b border-secondary"
            />
          </div>

          <div className="overflow-hidden">
            {error && <p className="text-secondary text-sm block max-w-full whitespace-nowrap">{error}</p>}
          </div>

        </div>

        <NeoButton
          handleClick={postData}
          text="Marché conclu !"
          colorText="secondary"
          sizeText="text-sm"
          moreStyle="p-8 py-2.5"
        ></NeoButton>
      </form>
    </div>
  );
}

export default SignupForm;