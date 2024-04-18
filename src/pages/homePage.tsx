import { useState } from "react";
import NeoButton from "../components/button";
import PokemonCard from "../components/pokemonCard";
import { Pokemon } from "../models/pokemon";
import { createPortal } from "react-dom";
import AddPokemonModal from "../components/homepage/addPokemonModal";

function HomePage() {

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

  const [isAdding, setIsAdding] = useState(false)

  return (
    
      <section className="mt-20">
            <h1 className="text-4xl font-semibold">En stock</h1>
            <p className="text-base w-2/4 mt-5 opacity-60">Volés avec respect, vendus pour l'argent : découvrez et adoptez votre Pokémon idéal avec Team Plasma !</p>

            <NeoButton text="Ajouter un Pokémon" handleClick={()=>{setIsAdding(!isAdding)}} colorText="primary" moreStyle="px-6"></NeoButton>
            {
              isAdding ? 
                createPortal(<AddPokemonModal/>, document.body) : null
            
            }
            <div className="grid grid-cols-4 mt-8">
            {
              pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.uuid} pokemon={pokemon}></PokemonCard>
              } )
            }
            </div>
            
      
      </section>
    
  );
}

export default HomePage