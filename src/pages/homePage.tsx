import { useEffect, useState } from "react";
import NeoButton from "../components/button";
import PokemonCard from "../components/pokemonCard";
import { Pokemon } from "../models/pokemon";
import ReactDOM, { createPortal } from "react-dom";
import AddPokemonModal from "../components/homepage/addPokemonModal";
import { User } from "../models/user";
import { getCurrentUserInfo } from "../utils/getCurrentUserInfo";
import { fetchPokemonsData } from "../services/fetchPokemons";
import { deletePokemon } from "../services/deletePokemon";
import { StatusCodes } from "http-status-codes";
import AlertBox from "../components/alertBox";

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

  function displayAlert(message:string){
    const newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        ReactDOM.render(<AlertBox message={message}/>, newDiv);
    setTimeout(() => {
      document.body.removeChild(newDiv)
    }, 2000);
  }

  async function deleteUserPokemon(pokeId: string){
    
    const pokemonToDelete = pokemons?.find((pokemon) => pokemon.id === pokeId)
    
    const response = await deletePokemon(pokeId)

    switch (response.status) {
      case StatusCodes.NO_CONTENT:
        displayAlert("L'annonce à bien été supprimée")
        setPokemons(pokemons?.filter((pokemon) => pokemon !== pokemonToDelete))
        break;
      case StatusCodes.NOT_FOUND:
        displayAlert("Nous ne trouvons pas cette annonce")
        break;
      case StatusCodes.UNAUTHORIZED:
        displayAlert("Vous ne pouvez pas faire cette action")
        break;
      case StatusCodes.FORBIDDEN:
        displayAlert("Vous ne pouvez pas faire cette action")
        break;
      default:
        break;
    }

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
                  return <PokemonCard key={pokemon.id} pokemon={pokemon} buyCallback={buying} editCallback={edit} deleteCallback={() => deleteUserPokemon(pokemon.id)} isBuyable={!isUserPokemon(pokemon,user)} isEditable={isUserPokemon(pokemon,user)} isDeletable={isUserPokemon(pokemon,user)}></PokemonCard>
                }) : null
            }
          </div>
        )
      }
    </section>

  );
}

export default HomePage