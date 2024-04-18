import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NeoButton from "./button";
import { StatusCodes } from "http-status-codes";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "./email";

interface InputData {
  username: string;
  email: string;
  password: string;
}

function SignupForm() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<InputData>();
  const [formData, setFormData] = useState<InputData>({
    username: "",
    email: "",
    password: ""
  });

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    if (data.password.length < 6 || !/[A-Z]/.test(data.password) || !/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
      setError("Le mot de passe doit contenir au moins 6 caractères, une majuscule et un caractère spécial");
      return;
    }

    if (data.username.length < 4 || !/^[a-zA-Z0-9]+$/.test(data.username)) {
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

    if (!response.ok) {
      setError("Erreur, veuillez ressayer plus tard");
      return;
    }
    
    if (response.ok) {
      sendEmail(data.username, data.email);
      navigate("/email-verification")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          handleClick={handleSubmit(onSubmit)}
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