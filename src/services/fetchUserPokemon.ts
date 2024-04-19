export function fetchUserPokemons(userId: string, userToken: string) {

    const response = fetch(`${process.env.REACT_APP_API_ROUTE}users/${userId}/pokemons`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userToken}`
        }
    })
    return response
}