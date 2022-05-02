import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Social = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const googleSignIn = (event) => {
        event.preventDefault();
        signInWithGoogle();
    }
    return (
        <div>
            <button onClick={googleSignIn}>google</button>
        </div>
    );
};

export default Social;