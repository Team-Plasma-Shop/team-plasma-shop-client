import { useState } from "react";

function AccountPage() {
  const [username, setUsername] = useState("N le sdf");
  const [email, setEmail] = useState("jesuissdf@gmail.com");

  return (
    <section className="mt-36">
      <h1 className="text-6xl font-semibold">Compte</h1>
      <div className="mt-8">
        <h2 className="text-4xl font-semibold">Informations générales</h2>
        <div className="flex gap-8 mt-8">
          <div>
            <span className=" opacity-60">Nom</span>
            <div className="shadow-innerNeo w-80 p-4 rounded-lg mt-2">
              <span className="text-xl">{username}</span>
            </div>
          </div>
          <div>
            <span className=" opacity-60">Email</span>
            <div className="shadow-innerNeo w-80 p-4 rounded-lg mt-2">
              <span className="text-xl">{email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountPage;
