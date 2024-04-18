import { useEffect, useState } from "react"
import { getTokenFromLs } from "./getTokenFromLs"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

function PrivateRoutes(){

    const [authToken, setAuthToken] = useState<string | null>()
    const navigate = useNavigate()

    useEffect(()=>{
        const lsToken = getTokenFromLs()
        if (lsToken) {
            try {
                const decodedToken = jwtDecode(lsToken)
                if (decodedToken && decodedToken.exp) {
                    setAuthToken(lsToken)
                    return;
                }   
            } catch (error) {
                localStorage.removeItem("token")
                navigate("/login")
            }
             
        }
        setAuthToken(null)     
    }, [])

    return(
        
            authToken !== null ? <Outlet/> : <Navigate to="/login"/>
        
    )
}

export default PrivateRoutes