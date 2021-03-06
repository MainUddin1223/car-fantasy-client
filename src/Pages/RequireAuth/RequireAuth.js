import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    console.log(user);
    if (loading) {
        return <p>loading</p>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />


    }
    if(user.emailVerified===false){
        return <Navigate to="/verify" state={{ from: location }} replace />
    }
    return children;

};

export default RequireAuth;