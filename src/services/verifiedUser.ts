import fetchUserById from "./fetchUserById"

export async function veriefiedUser(userId: string) {
    const user = await fetchUserById(userId)
    const data = {
        ...user,
        verified: true
    }

    const response = fetch(`${process.env.REACT_APP_API_ROUTE}users/${userId}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return response
}