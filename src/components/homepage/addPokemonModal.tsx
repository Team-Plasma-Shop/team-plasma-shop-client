import { ChangeEvent, useState } from 'react';
import { Pokemon } from '../../models/pokemon';
import NeoButton from "../button"
import { getCurrentUserInfo } from '../../utils/getCurrentUserInfo';

const pokemons = [
    {
        name: "Charizard",
        imageLink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        type: "Feu"
    },
    {
        name: "Blastoise",
        imageLink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        type: "Eau"
    },
    {
        name: "Vaporeon",
        imageLink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
        type: "Eau"
    },
    {
        name: "Arcanine",
        imageLink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
        type: "Feu"
    },
    {
        name: "Gyarados",
        imageLink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
        type: "Eau"
    },
    {
        name: "Magmar",
        imageLink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
        type: "Feu"
    },
    {
        name: "Feraligatr",
        imageLink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png",
        type: "Eau"
    },
    {
        name: "Typhlosion",
        imageLink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png",
        type: "Feu"
    },
    {
        name: "Swampert",
        imageLink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png",
        type: "Eau"
    },
    {
        name: "Blaziken",
        imageLink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png",
        type: "Feu"
    }
];

function AddPokemonModal({ handleClose }: { handleClose: () => any }) {

    interface Pokemon {
        name: string,
        imageLink: string, //Je veux les artwork official
        type: string
    }

    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(pokemons[0])
    const [price, setPrice] = useState<number>()

    function changeSelectedPokemon(e: ChangeEvent<HTMLSelectElement>) {
        const pokemon = pokemons.find((pokemon) => pokemon.name === e.target.value)

        if (pokemon) {
            setSelectedPokemon(pokemon)
        }
    }

    async function addNewPokemon() {
        const currentUser = await getCurrentUserInfo()

        if (currentUser) {
            console.log(currentUser);
            
            const data = {
                ...selectedPokemon,
                price: price,
                owner: currentUser['@id'],
            }
            console.log(data);
            
            const response = await fetch(`${process.env.REACT_APP_API_ROUTE}pokemons`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
        }


    }

    return (
        <>
            <div className="absolute z-10 p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-96 h-fit shadow-outerNeo bg-background flex flex-col gap-4 ">

                <div>
                    <img className="w-3/4 m-auto" src={selectedPokemon.imageLink} alt="" />
                </div>
                <label>

                    <select className='text-2xl font-semibold bg-transparent' onChange={(e) => changeSelectedPokemon(e)}>
                        {
                            pokemons.map((pokemon) => {
                                return (<option key={pokemon.imageLink} className='text-2xl bg-background' value={pokemon.name}>{pokemon.name}</option>)
                            })
                        }
                    </select>
                </label>
                <label>
                    <span className="secondary-glow-text font-bold text-xl">Prix</span>
                    <input onChange={(e) => setPrice(Number(e.target.value))} type="number" placeholder="1000" className="rounded-md p-3 placeholder-white w-full text-sm placeholder-opacity-30 bg-inherit text-white border-0 outline-0 focus:border-b border-secondary shadow-outerNeo" />
                </label>


                <NeoButton text="Ajouter" colorText="primary" handleClick={addNewPokemon} moreStyle="w-full"></NeoButton>
            </div>
            <div onClick={handleClose} className='absolute top-0 left-0 w-screen h-screen bg-background opacity-50'>

            </div>
        </>

    )
}

export default AddPokemonModal