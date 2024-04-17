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
