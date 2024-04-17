import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputData {
  username: string;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const { register, handleSubmit } = useForm<InputData>();
  const onSubmit: SubmitHandler<InputData> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col ">
          <label>Nom d'utilisateur</label>
          <input type="text" {...register("username")} placeholder="Nom d'utilisateur" />

          <label>Email</label>
          <input type="email" {...register("email")} placeholder="Email" />
          
          <label>Password</label>
          <input type="password" {...register("password")} placeholder="Mot de passe" />
          
          <button type="submit">Marché conclu !</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;