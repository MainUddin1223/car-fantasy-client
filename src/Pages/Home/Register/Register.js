import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../../Social/Social';

import './Register.css'

const Register = () => {
    const nameRef = useRef()
    const emailRef = useRef();
    const passwordRef = useRef();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const createAnAccount = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="container">
            <div className='register-form '>
                <div className='register-form-div'>
                    <h3 className='text-center text-white'>Register Form</h3>

                    <form onSubmit={createAnAccount}>
                        <input className='create-input' type="name" ref={nameRef} placeholder='Your name' required />
                        <input className='create-input' type="email" ref={emailRef} placeholder='Email' required />
                        <input className='create-input' type="password" ref={passwordRef} placeholder='Password' required />
                        <input className='create-input-button create-input' type="submit" value="Register" />
                    </form>
                    <p className='text-center text-white fs-3'>Or login with</p>

                    <Social></Social>
                    <Link className='login-link' to='/login'>Already have an account?</Link>
                </div>


            </div>
        </div>
    );
};

export default Register;