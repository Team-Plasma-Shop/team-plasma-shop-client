import { Pokemon } from "../models/pokemon";
import NeoButton from "./button";

function PokemonCard({ pokemon, isBuyable = true, isDeletable = false, isEditable = false, buyCallback, editCallback, deleteCallback }: 
    { pokemon: Pokemon, isBuyable?: boolean, isDeletable?: boolean, isEditable?: boolean, buyCallback?: ()=>any,editCallback?: ()=>any,deleteCallback?: ()=>any }) {

    return (
        <div className="shadow-outerNeo w-72 h-fit rounded-2xl p-8 flex flex-col gap-2">
            <img src={pokemon.imageLink} alt={`${pokemon.name}`} />
            <hr className="opacity-50 h-4"></hr>
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold tracking-wide">{pokemon.name}</p>
                <p className="font-bold text-lg secondary-glow-text">{pokemon.price}$</p>
            </div>

            <div className="flex justify-between gap-4">
                {
                    isBuyable ? (<NeoButton handleClick={buyCallback} text="Acheter" colorText="primary" sizeText="text-base" moreStyle="flex-1 "></NeoButton>) : null
                }
                {
                    isEditable ? (<NeoButton handleClick={editCallback} text="Modifier" colorText="secondary" sizeText="text-base" moreStyle="flex-1 "></NeoButton>) : null
                }
                {
                    isDeletable ? (<NeoButton handleClick={deleteCallback} text="Supprimer" colorText="danger" sizeText="text-base" moreStyle="flex-1 "></NeoButton>) : null
                }
            </div>

        </div>
    )
}

export default PokemonCard