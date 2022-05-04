import React, { useRef } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';



const Social = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    // Create an account
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Signin with Google
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const googleSignIn = (event) => {
        event.preventDefault();
        signInWithGoogle();
    }
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
                    <input type="email" ref={emailRef} placeholder='Email' required />
                    <input type="password" ref={passwordRef} placeholder='Password' required />
                    <button onClick={createAnAccount}>Register</button>
                </div>
            </div>
            <button onClick={googleSignIn}>google</button>
        </div>
    );
};

export default Social;