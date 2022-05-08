import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../../Social/Social';
import loginImg from '../../../images/login.jpg'

import './Register.css'
import Loading from '../../Loading/Loading';

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
        return <Loading></Loading>
    }
    return (
        <div className="container register-div p-5">
            <h2 className='text-center py-5'>Register Now</h2>

            <div className='register-form '>
                    <div className='register-image-div '>
                        <img className='img-fluid' src={loginImg} alt="" />
                    </div>
                    <div className='register-form-div '>
                        <form onSubmit={createAnAccount}>
                            <input className='create-input' type="name" ref={nameRef} placeholder='Your name' required />
                            <input className='create-input' type="email" ref={emailRef} placeholder='Email' required />
                            <input className='create-input' type="password" ref={passwordRef} placeholder='Password' required />
                            <input className='create-input-button create-input text-white py-1' type="submit" value="Register" />
                        </form>
                        <p className='text-center fs-3'>Or login with</p>

                        <Social></Social>
                        <p className='text-center mx-2 my-3 fs-5'>Already have an account ???   <Link className='login-link' to='/login'>Login Now! </Link></p>

                    </div>


                </div>

            </div>
    );
};

export default Register;