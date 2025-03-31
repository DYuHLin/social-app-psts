import React from 'react';

const LoginForm = () => {
    return (
        <form className='start-form'>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
            
        <button>Login</button>
        </form>
    );
}

export default LoginForm;
