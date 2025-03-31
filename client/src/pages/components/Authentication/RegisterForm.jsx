import React from 'react';

const RegisterForm = () => {
    return (
        <form className='start-form'>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <input type='password' placeholder='confirm password'/>
            
        <button>Register</button>
        </form>
    );
}

export default RegisterForm;
