import React from 'react';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleIcon from '../../images/google.png'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinners from '../Spinners/Spinners';



const Social = () => {
    const [user] = useAuthState(auth)
    const location = useLocation();
    const navigate = useNavigate();
    const exp = async (email) => {
        const { data } = await axios.post('https://secret-crag-22323.herokuapp.com/login', { email })
        localStorage.setItem('accessToken', data)
    }
    if (user) {
        const email = user.email
        exp(email)
    }
    // Signin with Google
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const googleSignIn = async (event) => {
        event.preventDefault();
        await signInWithGoogle();

    }

    let from = location.state?.from?.pathname || "/";
    if (googleUser) {

        navigate(from, { replace: true })
    }

    if (googleLoading) {
        return <Spinners></Spinners>
    }
    return (
        <div>

            <button onClick={googleSignIn} className='google-button'><img className='google-logo' src={googleIcon} alt="" /> Google</button>
        </div>
    );
};

export default Social;