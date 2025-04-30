import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import ProfileImg from '../Misc/ProfileImg'

const RegisterForm = () => {
    const {defaultImg} = useContext(AppContext)
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [img, setImg] = useState(defaultImg)
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault()
        const register = {username: username, password: password, description: '', image: img}
        try{
            if(confirmPassword !== password){
                setError('These passwords do not match')
            } else{
                const res = await axios.post('http://localhost:3000/api/auth/register', register, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
                if(res.data == 'username'){
                    setError('This username is taken')
                } else {
                    navigate('/gettingstarted')
                }
            }    
        } catch(err){
            console.log(err)
        }
    }
    return (
        <>
            <h1 className='start-title'>Login</h1>
            <form className='start-form' onSubmit={register}>
            <input type='text' placeholder='username' required name='username' onChange={(e) => setUsername(e.target.value)}/>
            <input type='password' placeholder='password' required name='password' onChange={(e) => setPassword(e.target.value)}/>
            <input type='password' placeholder='confirm password' required name='confirm' onChange={(e) => setConfirmPassword(e.target.value)}/>
            <ProfileImg setImage={setImg} />
            <button className='auth-btn'>Register</button>
            </form>
            <p className='error'>{error}</p>
        </>
    );
}

export default RegisterForm;
