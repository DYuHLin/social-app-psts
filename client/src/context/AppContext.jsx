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
    const [gUser, setGuser] = useState(false)

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
                 setGuser(res.data)
             });
    },[])

    useEffect(() => {
        // sessionStorage.setItem('APP_USER', JSON.stringify(user))
         axios.get('http://localhost:3000/api/auth/accountstore', {withCredentials: true, headers: {'Content-Type': 'application/json'}})
             .then(res => {  
                console.log(res.data)
                 if(res.data.user){
                    setUser(res.data.user[0])
                 } else{
                    setUser(false)
                 }
             });
    },[])

    return (
        <AppContext.Provider value={{ProtectedRoutes, setUser, user, gUser}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
