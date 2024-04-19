import { User } from "../models/user";
import NeoButton from "./button";

function UserCard({user, isDeletable = false, isEditable = false}: {user: User, isDeletable?: boolean, isEditable?: boolean}){
    function helloWorld() {
        console.log("hello world");
    }


    return(
        <div className="shadow-outerNeo w-72 h-fit rounded-2xl p-8 flex flex-col gap-2">
            <hr className="opacity-50 h-4"></hr>
            <div className="flex flex-col justify-between items-center gap-1">
                <p className="text-xl font-semibold tracking-wide">{user.username}</p>
                <p className="font-bold text-lg primary-glow-text">{user.email}</p>
                <p className="font-bold text-lg">{user.roles}</p>
            </div>

            <div className="flex justify-between gap-4">
            {
                isEditable ? ( <NeoButton handleClick={helloWorld} text="Modifier" colorText="secondary" sizeText="text-base" moreStyle="flex-1 "></NeoButton>) : null
            }
            {
                isDeletable ? ( <NeoButton handleClick={helloWorld} text="Supprimer" colorText="danger" sizeText="text-base" moreStyle="flex-1 "></NeoButton>) : null
            }
            </div>
            
            
           
        </div>
    )
}

export default UserCard