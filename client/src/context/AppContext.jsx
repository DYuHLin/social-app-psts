import {createContext, useState, useEffect} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import axios from 'axios'

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [gUser, setGuser] = useState(false)
    const defualtImg = 'https://res.cloudinary.com/dqdoxrm2x/image/upload/v1744207814/feq9ujcmkjrbabkptc6y.jpg'

    const ProtectedRoutes = () => {
        return () => {
            user == false ? (<Navigate to= '/gettingstarted'/>) : user ? (<Outlet />) : ''
        }
    }

    useEffect(() => {
         axios.get('http://localhost:3000/api/auth/account', {withCredentials: true, headers: {'Content-Type': 'application/json'}})
             .then(res => {
                 console.log(res.data)
                 setGuser(res.data)
             });
    },[])

    useEffect(() => {
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
        <AppContext.Provider value={{ProtectedRoutes, setUser, user, gUser, defualtImg}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
