import React, {useState} from 'react';
import LoginForm from './components/Authentication/LoginForm';
import RegisterForm from './components/Authentication/RegisterForm';

const Start = () => {
    const [forms, setForms] = useState(true);

    return (
        <section className='start-page'>
            <div className='start-forms'>
                {forms ? <LoginForm /> : <RegisterForm />}
                <button onClick={() => setForms(!forms)}>{forms ? 'Register' : 'Login'}</button>
            </div>
            <div className='begin-screen'>
                
            </div>
        </section>
    );
}

export default Start;
