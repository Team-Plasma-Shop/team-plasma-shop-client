export async function getUserToken(email: string, password: string) {
    const data = {
        email: email,
        password: password
    }

    const response = await fetch(`${process.env.REACT_APP_API_ROUTE}auth`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response
}