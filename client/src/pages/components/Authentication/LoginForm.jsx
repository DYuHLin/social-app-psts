import React from 'react';

const LoginForm = () => {
    return (
        <>
            <h1 className='start-title'>Login</h1>
            <form className='start-form'>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
                
            <button className='auth-btn'>Login</button>
            </form>
        </>
    );
}

export default LoginForm;
