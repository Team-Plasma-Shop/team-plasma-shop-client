import PokemonCard from "../components/pokemonCard";
import { Pokemon } from "../models/pokemon";

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
    // Ajoutez d'autres Pokémon selon vos besoins
  ];
  

  return (
    
      <section className="mt-36">
            <h1 className="text-6xl font-semibold">En stock</h1>
            <p className="text-xl w-2/4 mt-5 opacity-60">Volés avec respect, vendus pour l'argent : découvrez et adoptez votre Pokémon idéal avec Team Plasma !</p>

            <div className="flex justify-between flex-wrap">
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