import { useEffect, useState } from "react"
import { getTokenFromLs } from "./getTokenFromLs"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoutes(){

    const [authToken, setAuthToken] = useState<string | null>()

    useEffect(()=>{
        const lsToken = getTokenFromLs()
        lsToken ? setAuthToken(lsToken) : setAuthToken(null)        
    }, [])

    return(
        
            authToken !== null ? <Outlet/> : <Navigate to="/login"/>
        
    )
}

export default PrivateRoutes