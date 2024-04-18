import PokemonList from "../components/admin/pokemonList";
import UserList from "../components/admin/userList";

function adminPage() {
  return (
    <div className="flex flex-col">
      <div className="mt-28 mx-auto">
        <h1 className="text-4xl mb-10">Admin Dashboard</h1>
      </div>

      <div className="flex flex-row justify-around">
        <div>
          <PokemonList />
        </div>

        <div>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default adminPage