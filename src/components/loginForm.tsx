import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NeoButton from "./button";

interface InputData {
  email: string;
  password: string;
}

function LoginForm() {
  const { register, handleSubmit } = useForm<InputData>();
  const onSubmit: SubmitHandler<InputData> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <div className="shadow-outerNeo rounded-md">
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="p-3 placeholder-white w-full text-sm opacity-30 bg-inherit text-white"
            />
          </div>

          <div className="shadow-outerNeo rounded-md">
            <input
              type="password"
              {...register("password")}
              placeholder="Mot de passe"
              className="p-3 placeholder-white w-full text-sm opacity-30 bg-inherit text-white"
            />
          </div>
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
