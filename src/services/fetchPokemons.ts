async function fetchPokemons() {

    const response = await fetch(`${process.env.REACT_APP_API_ROUTE}pokemons`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response
}

export default fetchPokemons
