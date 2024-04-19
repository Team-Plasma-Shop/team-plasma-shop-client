import { User } from "../models/user"

export function checkAdminRole(user: User) {
    const adminRole = process.env.REACT_APP_ROLE_ADMIN

    if (adminRole && user) {
        return user.roles.includes(adminRole)
    }
    return false
}