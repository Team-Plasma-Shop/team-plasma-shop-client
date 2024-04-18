import { useEffect, useState } from "react";
import { User } from "../../models/user";
import UserCard from "../userCard";
import userTable from "../../data/users";

function UserList() {
  const [users, setUsers] = useState<User[]>()

  useEffect(() => {
    console.log(userTable);
    setUsers(userTable);
      // getUsers();
  }, [])
  
  async function getUsers() {
    // appel a l api pour recuperer tous les utilisateurs
    const response = await fetch(`${process.env.REACT_APP_API_ROUTE}users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
  }

  return (
    <div className="">
      <h1 className="text-4xl mb-10">Users</h1>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {users?.map((user) => (
          <UserCard key={user.id} user={user} isDeletable={true} isEditable={true}></UserCard>
        ))}
      </div>
    </div>
  )
}

export default UserList;