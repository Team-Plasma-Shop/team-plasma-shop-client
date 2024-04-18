import { useEffect, useState } from "react";
import { Pokemon } from "../../models/pokemon";
import pokemonsTable from "../../data/pokemon";
import PokemonCard from "../pokemonCard";


function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>()

  useEffect(() => {
    console.log(pokemonsTable);
    
    setPokemons(pokemonsTable);
    
      // getPokemons();
    }, [])
  
  async function getPokemons() {
    // appel a l api pour recuperer tous les utilisateurs
    const response = await fetch(`${process.env.REACT_APP_API_ROUTE}pokemons`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setPokemons(data);
  }

  async function deletePokemon(pokemon: Pokemon) {
    const response = await fetch(`${process.env.REACT_APP_API_ROUTE}pokemons/${pokemon.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    console.log(data);
  }

    return (
      <div>
        <h1 className="text-4xl mb-10">Pokemons</h1>

        {/* boucle sur le tableau de pokemons que j'ai recupere */}

        <div className="grid grid-cols-2 gap-8 mt-8">

          {pokemons?.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} isDeletable={true} isEditable={true} isBuyable={false}></PokemonCard>
          ))}
        </div>

      </div>
    )
}

export default PokemonList;