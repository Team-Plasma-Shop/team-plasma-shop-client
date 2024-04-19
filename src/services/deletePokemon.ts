export async function deletePokemon(pokeId: string, userToken: string) {

    const response = await fetch(`${process.env.REACT_APP_API_ROUTE}pokemons/${pokeId}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userToken}`
        },
    });

    return response
}
