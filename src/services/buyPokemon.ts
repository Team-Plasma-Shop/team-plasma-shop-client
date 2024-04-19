import { Pokemon } from "../models/pokemon"

export async function buyPokemon(pokemonToBuy: Pokemon, newOwner: string, userToken: string) {

    const data = {
        ...pokemonToBuy,
        sold: true,
        owner: newOwner
    }
    const response = await fetch(`${process.env.REACT_APP_API_ROUTE}pokemons/${pokemonToBuy.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userToken}`
        },
        body: JSON.stringify(data)
    })

    return response

}