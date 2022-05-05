import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Social from '../../Social/Social';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const login = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const [sendPasswordResetEmail, sending, restError] = useSendPasswordResetEmail(auth)
    const handleRestPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email)
        if (sending) {
            toast("Please Check your mail")
        }
    }
    if (loading) {
        return <p>loading</p>
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }

    let errorMessage;
    if (error || restError) {
        errorMessage = <div>
            <p className='fs-5 text-danger'>PLease check your email or password</p>
        </div>
    }
    return (
        <div>

            <h1>This is login</h1>

            <div>
                <form onSubmit={login}>
                    <input type="email" ref={emailRef} required />
                    <input type="password" ref={passwordRef} required />
                    <input type="submit" value="Login" />
                </form>
            </div>
            <p onClick={handleRestPassword}> Forget password??</p>
            {
                restError && <p>Please enter a valid email address</p>
            }

            <p>New here??<Link to='/register'>Create an account</Link></p>
            <Social></Social>
        </div>
    );
};

export default Login;