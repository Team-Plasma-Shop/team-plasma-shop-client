import { User } from "../../models/user";

function ManageUserTable({ users }: { users: User[] }) {

    return (
        <div>
            <h2 className="text-2xl font-semibold">gestion des utilisateurs</h2>
            <table className="shadow-outerNeo rounded-md mt-8">
            <thead>
                <tr className="text-left border-b-2 border-white border-opacity-10">
                    <th className="p-6 opacity-50">Nom d'utilisateur</th>
                    <th className="p-6 opacity-50">Email</th>
                    <th className="p-6 opacity-50">Rôle</th>
                </tr>

            </thead>

            <tbody>
                {
                    users.map((user) => {
                        return (
                            <tr className="border-b-2 border-white border-opacity-5" key={user.email}>
                                <td className="p-6">{user.username}</td>
                                <td className="p-6">{user.email}</td>
                                <td className="p-6">{user.role}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        
    )
}

export default ManageUserTable