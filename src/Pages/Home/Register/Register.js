import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
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
        <div>
            <div>
                <h1>create an account</h1>
                <div>
                    <form onSubmit={createAnAccount}>
                        <input type="email" ref={emailRef} placeholder='Email' required />
                        <input type="password" ref={passwordRef} placeholder='Password' required />
                        <input type="submit" value="Register" />
                    </form>
                    <button onClick={createAnAccount}>Register</button>
                </div>
            </div>
            <p>Already have an account??<Link to='/login'>Click here to login</Link></p>
        </div>
    );
};

export default Register;