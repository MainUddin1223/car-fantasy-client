import React, { useRef } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleIcon from '../../images/google.png'
import { useLocation, useNavigate } from 'react-router-dom';



const Social = () => {
    const location = useLocation();
    const navigate = useNavigate()
    // Signin with Google
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const googleSignIn = (event) => {
        event.preventDefault();
        signInWithGoogle();
    }
    let from = location.state?.from?.pathname || "/";
    if (googleUser) {
        navigate(from, { replace: true })
    }

    if (googleLoading) {
        return <p>loading</p>
    }
    return (
        <div>

            <button onClick={googleSignIn} className='google-button'><img className='google-logo' src={googleIcon} alt="" /> Google</button>
        </div>
    );
};

export default Social;