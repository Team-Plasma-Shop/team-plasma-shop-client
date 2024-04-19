export async function fetchPokemonsData() {

    const response = fetch(`${process.env.REACT_APP_API_ROUTE}pokemons`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response
}
