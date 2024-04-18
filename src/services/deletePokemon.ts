export async function deletePokemon(pokeId: string) {

    const response = await fetch(`${process.env.REACT_APP_API_ROUTE}pokemons/${pokeId}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response
}
