import { useEffect, useState } from "react";
import { Pokemon } from "../models/pokemon";
import GeneralInfos from "../components/account/generalInfos";
import OwnedPokemon from "../components/account/ownedPokemons";
import ManageUserTable from "../components/account/manageUserTable";
import { User } from '../models/user';
import { getCurrentUserInfo } from "../utils/getCurrentUserInfo";

function AccountPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const pokemons: Pokemon[] = [
    {
      id: '1',
      name: 'Bulbasaur',
      imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      price: 100,
      type: 'Grass',
      owner: 'Ash Ketchum',
      isSold: false,
      modifiedAt: new Date(),
    },
    {
      id: '2',
      name: 'Charmander',
      imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      price: 150,
      type: 'Fire',
      owner: 'Gary Oak',
      isSold: false,
      modifiedAt: new Date(),
    },
    {
      id: '3',
      name: 'Squirtle',
      imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      price: 120,
      type: 'Water',
      owner: 'Misty',
      isSold: true,
      modifiedAt: new Date(),
    },
  ];

  const users: User[] = [
    {
      id: '1',
      username: 'john_doe',
      email: 'john.doe@example.com',
      isVerified: true,
      role: ['user'],
    },
    {
      id: '2',
      username: 'jane_doe',
      email: 'jane.doe@example.com',
      isVerified: true,
      role: ['user'],
    },
    {
      id: '3',
      username: 'admin_user',
      email: 'admin.user@example.com',
      isVerified: true,
      role: ['admin'],
    },
    {
      id: '4',
      username: 'guest_user',
      email: 'guest.user@example.com',
      isVerified: false,
      role: ['guest'],
    },
    {
      id: '5',
      username: 'test_user',
      email: 'test.user@example.com',
      isVerified: true,
      role: ['user', 'tester'],
    },
  ];

  async function setUserInfo() {
    const currentUserInfo = await getCurrentUserInfo()
  
    if (currentUserInfo) {
      setUsername(currentUserInfo.username)
      setEmail(currentUserInfo.email)
    }
  }


useEffect(() => {
  setUserInfo()
}, [])


return (
  <section className="mt-20">
    <h1 className="text-4xl font-semibold">Compte</h1>
    <div className="flex flex-col gap-8 mt-8">
      <GeneralInfos username={username} email={email} />
      <OwnedPokemon pokemons={pokemons} />
      <ManageUserTable users={users} />
    </div>

  </section>
);
}

export default AccountPage;
