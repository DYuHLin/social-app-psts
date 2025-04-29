import React, { useContext, useState } from 'react';
import axios from 'axios'
import AppContext from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const {setUser} = useContext(AppContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post('http://localhost:3000/api/auth/login', {headers: {'Content-Type': 'application/json'}})
            if(res.data == 'username'){
                setError('This username is incorrect or does not exist')
            } else if(res.data == 'password'){
                setError('This password is incorrect')
            } else {
                setUser(res.data)
                navigate('/')
            }

        } catch(err){
            console.log(err)
        }
    }
    return (
        <>
            <h1 className='start-title'>Login</h1>
            <form className='start-form' onSubmit={login}>
            <input type='text' required placeholder='username' name='username'/>
            <input type='password' required placeholder='password' name='password'/>
                
            <button className='auth-btn'>Login</button>
            </form>
            <p className='error'>{error}</p>
        </>
    );
}

export default LoginForm;
