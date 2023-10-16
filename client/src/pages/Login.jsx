import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

function Login() {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefult();
        try {
            const response = await LOGIN_USER({
                variables: {
                    email: formState.email,
                    password: formState.password
                }
                });
            const token = response.data.login.token;
            Auth.login(token);
            }
            catch (e) {
                console.error(e);
            }
    }

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                </div>
                <button className="btn">Log In</button>
            </form>
        </div>
    )
}

export default Login;