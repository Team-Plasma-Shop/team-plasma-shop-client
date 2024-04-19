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
            const allUsersResponse = await fetch(`${process.env.REACT_APP_API_ROUTE}users`)

            const allUsers = await allUsersResponse.json()

            const currentUser = allUsers["hydra:member"].find((users: User) => users.email === decodedToken.email)


            return currentUser
        }
    }
    return null;
}

