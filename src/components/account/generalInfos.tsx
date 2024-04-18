function GeneralInfos({username, email} : {username: string, email:string}){
    return(
        <div>
        <h2 className="text-2xl font-semibold">Informations générales</h2>
        <div className="flex gap-8 mt-8">
          <div>
            <span className=" opacity-60">Nom d'utilisateur</span>
            <div className="shadow-innerNeo w-80 p-4 rounded-lg mt-2">
              <span className="text-base">{username}</span>
            </div>
          </div>
          <div>
            <span className=" opacity-60">Email</span>
            <div className="shadow-innerNeo w-80 p-4 rounded-lg mt-2">
              <span className="text-base">{email}</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default GeneralInfos