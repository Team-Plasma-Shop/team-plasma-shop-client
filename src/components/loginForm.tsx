import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NeoButton from "./button";
import { StatusCodes } from "http-status-codes";
import { useNavigate } from "react-router-dom";
import { getUserToken } from "../services/getUserToken";

interface InputData {
  email: string;
  password: string;
}



function LoginForm() {

  const { register, handleSubmit } = useForm<InputData>();
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<InputData> = async (data) => {

    const response = await getUserToken(data.email,data.password)

    if (!response.ok) {
      if (response.status === StatusCodes.UNAUTHORIZED) {
        setError("Vos identifiants sont invalides")
        return;
      }else{
        setError("Erreur, veuillez ressayer plus tard (c'est peut-être à cause de Thomas Eole...)")
      }
    }
    const token = await response.json()
    localStorage.setItem("token", JSON.stringify(token.token));

    navigate("/")

  
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <div className="shadow-outerNeo rounded-md">
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="rounded-md p-3 placeholder-white w-full text-sm placeholder-opacity-30 bg-inherit text-white border-0 outline-0 focus:border-b border-primary"
            />
          </div>

          <div className="shadow-outerNeo rounded-md">
            <input
              type="password"
              {...register("password")}
              placeholder="Mot de passe"
              className="rounded-md p-3 placeholder-white w-full text-sm placeholder-opacity-30 bg-inherit text-white border-0 outline-0 focus:border-b border-primary"
            />
          </div>

          {
            error ? (<p className="danger-glow-text">{error}</p>) : null
          }
        </div>
        <NeoButton
          handleClick={handleSubmit(onSubmit)}
          text="Connexion"
          colorText="primary"
          sizeText="text-sm"
          moreStyle="p-8 py-2.5"
        ></NeoButton>
      </form>
    </div>
  );
}

export default LoginForm;
