export async function fetchPokemonsData(userToken: string) {

    const response = fetch(`${process.env.REACT_APP_API_ROUTE}pokemons`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userToken}`
        },
    });

    return response
}
