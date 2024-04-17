import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NeoButton from "./button";

interface InputData {
  username: string;
  email: string;
  password: string;
}

function SignupForm() {
  const { register, handleSubmit } = useForm<InputData>();
  const [formData, setFormData] = useState<InputData>({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit: SubmitHandler<InputData> = (data) => postData();

  async function postData() {
    console.log(formData);

    const response = await fetch("http://127.0.0.1:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <div className="shadow-outerNeo rounded-md">
            <input
              type="text"
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
              {...register("password", {
                onChange: (e) =>
                  setFormData({ ...formData, password: e.target.value }),
              })}
              placeholder="Mot de passe"
              className="rounded-md p-3 placeholder-white w-full text-sm placeholder-opacity-30 bg-inherit text-white border-0 outline-0 focus:border-b border-secondary"
            />
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
