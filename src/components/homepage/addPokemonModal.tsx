import { useState } from 'react';
import { Pokemon } from '../../models/pokemon';
import NeoButton from "../button"

function AddPokemonModal({handleClose}:{handleClose: ()=>any}) {
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

    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(pokemons[0])

    function changeSelectedPokemon(e: Event) {
        console.log(e)
    }

    return (
        <>
            <div className="absolute z-10 p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-96 h-fit shadow-outerNeo bg-background flex flex-col gap-4 ">

                <div>
                    <img className="w-3/4 m-auto" src={selectedPokemon.imageLink} alt="" />
                </div>
                <label>

                    <select className='text-2xl font-semibold bg-transparent' onChange={() => changeSelectedPokemon}>
                        {
                            pokemons.map((pokemon) => {
                                return (<option className='text-2xl bg-transparent appearance-none' value={pokemon.uuid}>{pokemon.name}</option>)
                            })
                        }
                    </select>
                </label>
                <label>
                    <span className="secondary-glow-text font-bold text-xl">Prix</span>
                    <input type="number" placeholder="1000" className="rounded-md p-3 placeholder-white w-full text-sm placeholder-opacity-30 bg-inherit text-white border-0 outline-0 focus:border-b border-secondary shadow-outerNeo" />
                </label>


                <NeoButton text="Ajouter" colorText="primary" handleClick={() => { }} moreStyle="w-full"></NeoButton>
            </div>
            <div onClick={handleClose} className='absolute top-0 left-0 w-screen h-screen bg-background opacity-50'>

            </div>
        </>

    )
}

export default AddPokemonModal