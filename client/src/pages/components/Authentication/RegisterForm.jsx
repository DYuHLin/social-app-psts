import React from 'react';

const RegisterForm = () => {
    return (
        <>
            <h1 className='start-title'>Login</h1>
            <form className='start-form'>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <input type='password' placeholder='confirm password'/>
                
            <button className='auth-btn'>Register</button>
            </form>
        </>
    );
}

export default RegisterForm;
