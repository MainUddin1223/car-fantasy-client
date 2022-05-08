import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Social from '../../Social/Social';
import axios from 'axios';
import logImg from '../../../images/login.jpg'
import Loading from '../../Loading/Loading';
import './Login.css'

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
    const login = async e => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://secret-crag-22323.herokuapp.com/login', { email })
        localStorage.setItem('accessToken', data)
    }

    const [sendPasswordResetEmail, sending, restError] = useSendPasswordResetEmail(auth)
    const handleRestPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email)
        if (sending) {
            toast('Please Check your Email', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        if(restError){
            console.log(restError);
        }
    }
    if (loading) {
        return <Loading></Loading>
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }
    if (error) {
        <div>
            <p className='fs-5 text-danger'>Please check your email or password</p>
        </div>
    }
    return (
        <div className='container register-div p-5'>

            <h2 className='text-center'>Login Now</h2>

            <div className='register-form'>
                <div className='register-image-div'>
                    <img className='img-fluid' src={logImg} alt="" />
                </div>
                <div className='register-form-div p-4'>
                    <form onSubmit={login}>
                        <input className='form-control create-input' type="email" ref={emailRef} required />
                        <input className='form-control create-input' type="password" ref={passwordRef} required />
                        <input className='form-control bg-primary fs-4  text-white py-1 my-3 px-0' type="submit" value="Login" />
                    </form>

                    <p className='forget-pass-link text-center fs-4' onClick={handleRestPassword}> Forget password??</p>
                    {
                        restError && <p className='text-danger text-center m-3 fs-5'>Please enter a valid email address</p>
                    }
                               <p className='text-center fs-3'>Or login with</p>
                 <div className='my-4'>
                 <Social></Social>
                 </div>
                    <p className='text-center mx-2 my-3 fs-5'>New to Car Fantasy ???   <Link className='login-link' to='/register'>Register Now! </Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;