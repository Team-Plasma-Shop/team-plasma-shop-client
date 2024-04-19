import { useEffect, useState } from "react";
import { Pokemon } from "../models/pokemon";
import GeneralInfos from "../components/account/generalInfos";
import OwnedPokemon from "../components/account/ownedPokemons";
import ManageUserTable from "../components/account/manageUserTable";
import { User } from '../models/user';
import { getCurrentUserInfo } from "../utils/getCurrentUserInfo";
import { fetchUserPokemons } from "../services/fetchUserPokemon";
import NeoButton from "../components/button";
import { useNavigate } from "react-router-dom";

function AccountPage() {
  const [user, setUser] = useState<User>()
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const navigate = useNavigate()

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
      setUser(currentUserInfo)
    }
  }

  async function setPokemonsArray() {
   
    const currentUserInfo = await getCurrentUserInfo()
    
    if (currentUserInfo) {
      const response = await fetchUserPokemons(currentUserInfo.id)
      
      if (response.ok) {
        const pokemonsInfo = await response.json()
        
        setPokemons(pokemonsInfo["hydra:member"])
      }

    }
  }


  async function initState() {
    await setUserInfo()
    await setPokemonsArray()
  }

  function logout(){
    localStorage.removeItem("token")
    navigate("/login")
  }



useEffect(() => {
  initState()
}, [])


return (
  <section className="mt-20">
    <h1 className="text-4xl font-semibold">Compte</h1>
    <div className="flex flex-col gap-8 mt-8">
      {
        user ? (
          <>
          <GeneralInfos username={user.username} email={user.email} />
          <NeoButton text="Déconnexion" handleClick={logout} colorText="danger"/>
          <OwnedPokemon pokemons={pokemons} />
          <ManageUserTable users={users} />
          </>
          
        ) : null
      }
      
    </div>

  </section>
);
}

export default AccountPage;
