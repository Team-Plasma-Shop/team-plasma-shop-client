import { log } from "console";
import { Pokemon } from "../models/pokemon";
import NeoButton from "./button";

function PokemonCard({pokemon, isBuyable = true, isDeletable = false, isReleasable = false, isEditable = false}: {pokemon: Pokemon, isBuyable?: boolean, isDeletable?: boolean, isReleasable?: boolean, isEditable?: boolean}){
    function helloWorld() {
        console.log("hello world");
    }


    return(
        <div className="shadow-outerNeo w-72 h-fit rounded-2xl p-8 flex flex-col gap-2">
            <img src={pokemon.imageLink} alt={`${pokemon.name}`} />
            <hr className="opacity-50 h-4"></hr>
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold tracking-wide">{pokemon.name}</p>
                <p className="font-bold text-lg secondary-glow-text">{pokemon.price}$</p>
            </div>

            {
                isBuyable ? ( <NeoButton handleClick={helloWorld} text="Acheter" colorText="primary" sizeText="text-base"></NeoButton>) : null
            }
            {
                isEditable ? ( <NeoButton handleClick={helloWorld} text="Modifier" colorText="secondary" sizeText="text-base"></NeoButton>) : null
            }
            {
                isReleasable ? ( <NeoButton handleClick={helloWorld} text="Relâcher" colorText="danger" sizeText="text-base"></NeoButton>) : null
            }
            
           
        </div>
    )
}

export default PokemonCard