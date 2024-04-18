import { jwtDecode } from "jwt-decode";
import { User } from "../models/user";
import fetchUserById from "../services/fetchUserById";
import { getTokenFromLs } from "./getTokenFromLs";
import { Token } from "../models/token";

export async function getCurrentUserInfo(): Promise<User | null> {
    const token = getTokenFromLs()
    let decodedToken: Token;

    if (token !== null) {
        decodedToken = jwtDecode(token)

        if (decodedToken) {
            const currentUser: User = await fetchUserById(decodedToken.id)

            return currentUser
        }
    }
    return null;
}

