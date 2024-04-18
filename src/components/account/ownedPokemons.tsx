import { Pokemon } from "../../models/pokemon";
import PokemonCard from "../pokemonCard";

function OwnedPokemon({pokemons}: {pokemons: Pokemon[]}){
    return (
        <div>
        <h2 className="text-2xl font-semibold">Mes Pokémons</h2>
        <div className="grid grid-cols-4 mt-8">
            {
              pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.id} pokemon={pokemon} isBuyable={false} isDeletable={true}></PokemonCard>
              } )
            }
            </div>
    </div>
    )
}

export default OwnedPokemon