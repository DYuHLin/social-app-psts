import React, {useState} from 'react';
import LoginForm from './components/Authentication/LoginForm';
import RegisterForm from './components/Authentication/RegisterForm';
import MainLogo from '../assets/img/6.png'

const Start = () => {
    const [forms, setForms] = useState(true);

    return (
        <section className='start-page'>
            <div className='start-forms'>
                <div className='mini-logo'>
                    <img src={MainLogo} className='logo-mini' />
                </div>
                    {forms ? <LoginForm /> : <RegisterForm />}
                    <button onClick={() => setForms(!forms)} className='auth-btn'>{forms ? 'Register' : 'Login'}</button>
                    <button className='google-auth-btn'>Continue with Google</button>
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
