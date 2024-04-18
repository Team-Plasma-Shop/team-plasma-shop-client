export function getTokenFromLs(): string | null {
    let token = null;

    if (localStorage.getItem("token") !== null) {
        const tokenString = localStorage.getItem("token")

        if (tokenString !== null) {
            token = JSON.parse(tokenString).token;

        }
    }
    return token
}