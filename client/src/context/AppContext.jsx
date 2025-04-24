import {createContext, useState, useEffect} from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const getInitialState = () => {
        const localUser = sessionStorage.getItem('APP_USER')
        return localUser ? JSON.parse(localUser): false
    }

    const [user, setUser] = useState(getInitialState)

    const ProtectedRoutes = () => {
        return () => {
            user == false ? (<Navigate to= '/gettingstarted'/>) : user ? (<Outlet />) : ''
        }
    }

    useEffect(() => {
        sessionStorage.setItem('APP_USER', JSON.stringify(user))
    },[user])

    return (
        <AppContext.Provider value={{ProtectedRoutes, setUser, user}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
