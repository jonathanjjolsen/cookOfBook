import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

function SignUp() {
    const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        try {
            const response = await addUser({
                variables: {
                    email: formState.email,
                    password: formState.password,
                    firstName: formState.firstName,
                    lastName: formState.lastName
                }
            });
            const token = response.data.addUser.token;
            Auth.login(token);
        }
        catch (e) {
            console.error(e);
        }
    }

    const handleChane = event => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                </div>
                <button className="btn">Log In</button>
            </form>
        </div>
    )
}

