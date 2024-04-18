import { useEffect, useState } from "react";
import NeoButton from "../components/button";
import PokemonCard from "../components/pokemonCard";
import { Pokemon } from "../models/pokemon";
import { createPortal } from "react-dom";
import AddPokemonModal from "../components/homepage/addPokemonModal";
import { User } from "../models/user";
import { getCurrentUserInfo } from "../utils/getCurrentUserInfo";
import { fetchPokemonsData } from "../services/fetchPokemons";

function HomePage() {

  const [pokemons, setPokemons] = useState<Pokemon[]>()
  const [error, setError] = useState("")
  const [user, setUser] = useState<User | null>()

  async function getPokemons() {
    const response = await fetchPokemonsData()
    let pokemonsArray: Pokemon[] = [];

    if (!response.ok) {
      setError("Une erreur s'est produite veuillez ressayer plus tard")
      return;
    } else {
      const pokemonData: any = await response.json()
      pokemonsArray = pokemonData['hydra:member']
    }

    setPokemons(pokemonsArray)
  }

  async function setCurrentUser(){
    const currentUser = await getCurrentUserInfo()
    setUser(currentUser)
  }

  useEffect(() => {
    getPokemons()
    setCurrentUser()
  }, [])

  const [isAdding, setIsAdding] = useState(false)

  function isUserPokemon(pokemon:Pokemon, user:User){
    return pokemon.owner === user["@id"]
  }

  function buying(){
    console.log("Buy");
    
  }

  function deleteD(){
    console.log("Delete");
    
  }

  function edit(){
    console.log("edit");
    
  }

  return (

    <section className="mt-20">
      <h1 className="text-4xl font-semibold">En stock</h1>
      <p className="text-base w-2/4 mt-5 opacity-60">Volés avec respect, vendus pour l'argent : découvrez et adoptez votre Pokémon idéal avec Team Plasma !</p>

      <NeoButton text="Ajouter un Pokémon" handleClick={() => { setIsAdding(!isAdding) }} colorText="primary" moreStyle="px-6"></NeoButton>
      {
        isAdding ?
          createPortal(<AddPokemonModal handleClose={() => { setIsAdding(!isAdding) }} />, document.body) : null

      }

      {
        error ? (<p>{error}</p>) : (
          <div className="grid grid-cols-4 mt-8 gap-9">
            {

              pokemons && user ?
                pokemons.map((pokemon) => {
                  return <PokemonCard key={pokemon.id} pokemon={pokemon} buyCallback={buying} editCallback={edit} deleteCallback={deleteD} isBuyable={!isUserPokemon(pokemon,user)} isEditable={isUserPokemon(pokemon,user)} isDeletable={isUserPokemon(pokemon,user)}></PokemonCard>
                }) : null
            }
          </div>
        )
      }
    </section>

  );
}

export default HomePage