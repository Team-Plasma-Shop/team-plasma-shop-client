import React from "react";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputData {
  username: string;
  email: string;
  password: string;
}

function SignupForm() {
  const { register, handleSubmit } = useForm<InputData>();
  const onSubmit: SubmitHandler<InputData> = (data) => postData(data);

  const body = {
    "uuid": "a9fec0f1-e8ad-4cce-9e2a-ef66fe42d1a2",
    "username": "string",
    "email": "string",
    "password": "string",
    "role": [
      "string"
    ],
    "created_at": "2024-04-17T11:26:28.969Z",
    "verified": true
  }

  async function postData(data: InputData) {
    const response = await fetch("http://127.0.0.1:8000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(response);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <input
            type="text"
            {...register("username")}
            placeholder="Nom d'utilisateur"
          />

          <input type="email"
            {...register("email")}
            placeholder="Email"
          />

          <input
            type="password"
            {...register("password")}
            placeholder="Mot de passe"
          />

          <button type="submit">Marché conclu !</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;