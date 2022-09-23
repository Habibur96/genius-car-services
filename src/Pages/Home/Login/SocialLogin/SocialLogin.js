


import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import gglLogo from '../../../../../src/images/google.png'
import auth from '../../../../firebase.init';
import facebook from '../../../../images/facebook.png';
import gitHub from '../../../../images/gitHub.png';


const SocialLogin = () => {

    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let errorElement;
    if (error || error1) {

        errorElement =
            <p className='text-danger'>Error: {error?.message}  {error1?.message}</p>

    }

    if (user || user1) {
        navigate('/home')
    }
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-3 px-3'>Or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}


            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} src={gglLogo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto'>

                    <img style={{ width: '45px' }} src={gitHub} alt="" />
                    <span className='px-2'>  GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
