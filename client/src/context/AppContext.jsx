import {createContext, useState, useEffect} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import axios from 'axios'

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const defaultImg = "https://res.cloudinary.com/dqdoxrm2x/image/upload/v1744207814/feq9ujcmkjrbabkptc6y.jpg"

    const ProtectedRoutes = () => {
        return () => {
            user == false ? (<Navigate to= '/gettingstarted'/>) : user ? (<Outlet />) : ''
        }
    }

    useEffect(() => {
        try{
            axios.get('http://localhost:3000/api/auth/account', {withCredentials: true, headers: {'Content-Type': 'application/json'}})
             .then(res => {
                 console.log(res.data)
                 setUser(res.data)
             });
        } catch(err){
            console.log(err)
        }
    },[])

    return (
        <AppContext.Provider value={{ProtectedRoutes, setUser, user, defaultImg}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
