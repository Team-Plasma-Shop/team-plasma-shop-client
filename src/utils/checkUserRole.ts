import { User } from "../models/user"

export function checkUserRole(user: User) {
    const userRole = process.env.REACT_APP_ROLE_USER

    if (userRole && user) {
        return user.roles.includes(userRole)
    }
    return false
}