

import React from 'react';
import gglLogo from '../../../../../src/images/google.png'
import facebook from '../../../../images/facebook.png'
import gitHub from '../../../../images/gitHub.png'

const SocialLogin = () => {
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-3 px-3'>Or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>


            <div>
                <button className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} src={gglLogo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>

                <button className='btn btn-info w-50 d-block mx-auto'>

                    <img style={{ width: '30px' }} src={gitHub} alt="" />
                    <span className='px-2'>  GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;

