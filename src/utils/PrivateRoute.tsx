import { useEffect, useState } from "react"
import { getTokenFromLs } from "./getTokenFromLs"
import { Navigate, Outlet } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

function PrivateRoutes(){

    const [authToken, setAuthToken] = useState<string | null>()

    useEffect(()=>{
        const lsToken = getTokenFromLs()
        if (lsToken) {
            const decodedToken = jwtDecode(lsToken)
            if (decodedToken && decodedToken.exp) {
                setAuthToken(lsToken)
                return;
            }    
        }
        setAuthToken(null)     
    }, [])

    return(
        
            authToken !== null ? <Outlet/> : <Navigate to="/login"/>
        
    )
}

export default PrivateRoutes