import { log } from "console";
import { Pokemon } from "../models/pokemon";
import NeoButton from "./button";

function PokemonCard({pokemon, isBuyable = true, isDeletable = false, isReleasable = false, isEditable = false}: {pokemon: Pokemon, isBuyable?: boolean, isDeletable?: boolean, isReleasable?: boolean, isEditable?: boolean}){
    function helloWorld() {
        console.log("hello world");
    }


    return(
        <div className="shadow-outerNeo w-[370px] h-fit rounded-2xl p-8 flex flex-col gap-2">
            <img src={pokemon.imageLink} alt={`${pokemon.name}`} />
            <hr className="opacity-50 h-4"></hr>
            <div className="flex justify-between items-center">
                <p className="text-3xl font-semibold tracking-wide">{pokemon.name}</p>
                <p className="font-bold text-xl secondary-glow-text">{pokemon.price}$</p>
            </div>

            {
                isBuyable ? ( <NeoButton handleClick={helloWorld} text="Acheter" colorText="primary"></NeoButton>) : null
            }
            {
                isEditable ? ( <NeoButton handleClick={helloWorld} text="Modifier" colorText="secondary"></NeoButton>) : null
            }
            {
                isReleasable ? ( <NeoButton handleClick={helloWorld} text="Modifier" colorText="danger"></NeoButton>) : null
            }
            
           
        </div>
    )
}

export default PokemonCard