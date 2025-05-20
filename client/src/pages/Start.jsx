import React, {useState} from 'react';
import LoginForm from './components/Authentication/LoginForm';
import RegisterForm from './components/Authentication/RegisterForm';
import MainLogo from '../assets/img/6.png'
import AppContext from '../context/AppContext';
// import axios from 'axios'

const Start = () => {
    // const {user} = useContext(AppContext)
    const [forms, setForms] = useState(true)

    const googleLogin = (e) => {
        e.preventDefault()
        const path = 'http://localhost:3000/api/auth/google'
        window.open(path, '_self')
    }

    return (
        <section className='start-page'>
            <div className='start-forms'>
                <div className='mini-logo'>
                    <img src={MainLogo} className='logo-mini' />
                </div>
                    {forms ? <LoginForm /> : <RegisterForm setForms = {setForms}/>}
                    <button onClick={() => setForms(!forms)} className='auth-btn'>{forms ? 'Register' : 'Login'}</button>
                    <form onSubmit={googleLogin}>
                        <button className='google-auth-btn'>Continue with Google</button>
                    </form>  
                    {/* <button onClick={() => console.log(user)}>Show</button> */}
            </div>
            <div className='begin-screen'>
                <div className='start-logo'>
                    <img src={MainLogo} className='logo-img' />
                </div>
            </div>
        </section>
    );
}

export default Start;
