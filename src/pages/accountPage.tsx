import { useState } from "react";
import { Pokemon } from "../models/pokemon";
import PokemonCard from "../components/pokemonCard";

function AccountPage() {
  const [username, setUsername] = useState("N le sdf");
  const [email, setEmail] = useState("jesuissdf@gmail.com");

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
    // Ajoutez d'autres Pokémon selon vos besoins
  ];

  return (
    <section className="mt-20">
      <h1 className="text-4xl font-semibold">Compte</h1>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Informations générales</h2>
        <div className="flex gap-8 mt-8">
          <div>
            <span className=" opacity-60">Nom</span>
            <div className="shadow-innerNeo w-80 p-4 rounded-lg mt-2">
              <span className="text-base">{username}</span>
            </div>
          </div>
          <div>
            <span className=" opacity-60">Email</span>
            <div className="shadow-innerNeo w-80 p-4 rounded-lg mt-2">
              <span className="text-base">{email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Mes Pokémons</h2>
        <div className="grid grid-cols-4 mt-8">
            {
              pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.uuid} pokemon={pokemon} isBuyable={false} isReleasable={true}></PokemonCard>
              } )
            }
            </div>
    </div>
    </section>
  );
}

export default AccountPage;
