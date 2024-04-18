async function fetchUserById(id: string) {

    const response = await fetch(`${process.env.REACT_APP_API_ROUTE}users/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json()
}

export default fetchUserById
