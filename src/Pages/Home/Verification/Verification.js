import React, { useState } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Verification = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (sending) {
        return (
            toast('Please Check your Email', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        )

    }
    if (error) {
        return (
            toast.warn('Something wrong!!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }), navigate('/login')

        );
    }

    return (
        <div className='container'>
            <div className='w-100 d-flex flex-column justify-content-center align-items-center' style={{ height: '600px' }}>
            <h1 className='py-5'>Please Verify your email</h1>
            <br />
                <button className='btn btn-primary' onClick={async () => {
                    await sendEmailVerification(email)
                }}>Click here to verify</button>
            </div>

        </div>
    );
};

export default Verification;