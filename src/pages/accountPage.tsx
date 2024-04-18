import { useEffect, useState } from "react";
import { Pokemon } from "../models/pokemon";
import PokemonCard from "../components/pokemonCard";
import GeneralInfos from "../components/account/generalInfos";
import OwnedPokemon from "../components/account/ownedPokemons";
import ManageUserTable from "../components/account/manageUserTable";
import { User } from '../models/user';
import { jwtDecode } from "jwt-decode";
import { getTokenFromLs } from "../utils/getTokenFromLs";
import fetchUserById from "../services/fetchUserById";
import { Token } from "../models/token";

function AccountPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const pokemons: Pokemon[] = [
    {
      uuid: '1',
      name: 'Bulbasaur',
      imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      price: 100,
      type: 'Grass',
      owner: 'Ash Ketchum',
      isSold: false,
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
    {
      uuid: '2',
      name: 'Charmander',
      imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      price: 150,
      type: 'Fire',
      owner: 'Gary Oak',
      isSold: false,
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
    {
      uuid: '3',
      name: 'Squirtle',
      imageLink: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      price: 120,
      type: 'Water',
      owner: 'Misty',
      isSold: true,
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
  ];

  const users: User[] = [
    {
      uuid: '1',
      username: 'john_doe',
      email: 'john.doe@example.com',
      password: 'password123',
      isVerified: true,
      role: ['user'],
      createdAt: new Date(),
    },
    {
      uuid: '2',
      username: 'jane_doe',
      email: 'jane.doe@example.com',
      password: 'password456',
      isVerified: true,
      role: ['user'],
      createdAt: new Date(),
    },
    {
      uuid: '3',
      username: 'admin_user',
      email: 'admin.user@example.com',
      password: 'adminPassword',
      isVerified: true,
      role: ['admin'],
      createdAt: new Date(),
    },
    {
      uuid: '4',
      username: 'guest_user',
      email: 'guest.user@example.com',
      password: 'guestPassword',
      isVerified: false,
      role: ['guest'],
      createdAt: new Date(),
    },
    {
      uuid: '5',
      username: 'test_user',
      email: 'test.user@example.com',
      password: 'testPassword',
      isVerified: true,
      role: ['user', 'tester'],
      createdAt: new Date(),
    },
  ];

  async function setUserInfo(){
    const token = getTokenFromLs()
    let decodedToken: Token;

    if (token !== null) {
      decodedToken = jwtDecode(token)

      if (decodedToken) {
        const currentUser:User = await fetchUserById(decodedToken.id)
        
        setUsername(currentUser.username)
        setEmail(currentUser.email)
          
      }
    }
  }

  useEffect(()=>{
    setUserInfo()
  },[])
  

  return (
    <section className="mt-20">
      <h1 className="text-4xl font-semibold">Compte</h1>
      <div className="flex flex-col gap-8 mt-8">
        <GeneralInfos username={username} email={email} />
        <OwnedPokemon pokemons={pokemons}/>
        <ManageUserTable users={users}/>
      </div>
      
    </section>
  );
}

export default AccountPage;
