import {createContext, useState, useEffect} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import axios from 'axios'

const AppContext = createContext()

export const AppProvider = ({children}) => {
    // const getInitialState = () => {
    //     const localUser = sessionStorage.getItem('APP_USER')
    //     return localUser ? JSON.parse(localUser): false
    // }

    const [user, setUser] = useState(false)

    const ProtectedRoutes = () => {
        return () => {
            user == false ? (<Navigate to= '/gettingstarted'/>) : user ? (<Outlet />) : ''
        }
    }

    useEffect(() => {
        // sessionStorage.setItem('APP_USER', JSON.stringify(user))
         axios.get('http://localhost:3000/api/auth/account', {withCredentials: true, headers: {'Content-Type': 'application/json'}})
             .then(res => {
                 console.log(res.data)
                 setUser(res.data)
             });
    },[])

    return (
        <AppContext.Provider value={{ProtectedRoutes, setUser, user}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
