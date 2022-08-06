import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
        console.log(event.target.password.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

    }


    return (
        <div className='register-form'>
            <h1 style={{ textAlign: 'center' }}>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? || <Link to={'/Login'} className='text-danger text-decoration-none' onClick={navigateLogin} >Please Loging</Link></p>
        </div>
    );
};

export default Register;