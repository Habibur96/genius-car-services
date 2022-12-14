

// import { Link, useNavigate } from 'react-router-dom';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import './Register.css';
// import auth from '../../../../../firebase.init';

// const Register = () => {

//     const [
//         createUserWithEmailAndPassword,
//         user,

//     ] = useCreateUserWithEmailAndPassword(auth);
//     const navigate = useNavigate();

//     console.log(user)
//     if (!user) {
//         console.log('Noyon')
//         navigate('/home');
//     }

//     const navigateLogin = () => {
//         navigate('/login');
//     }



//     const handleRegister = event => {
//         event.preventDefault();
//         console.log(event)
//         const name = event.target.name.value;
//         const email = event.target.email.value;
//         const password = event.target.password.value;


//         createUserWithEmailAndPassword(email, password);
//         console.log(email, password)
//     }

//     return (
//         <div className='register-form'>
//             <h2 style={{ textAlign: 'center' }}>Please Register</h2>
//             <form onSubmit={handleRegister}>
//                 <input type="text" name="name" id="" placeholder='Your Name' />

//                 <input type="email" name="email" id="" placeholder='Email Address' required />

//                 <input type="password" name="password" id="" placeholder='Password' required />
//                 <input type="submit" value="Register" />
//             </form>
//             <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
//         </div>
//     );
// };

// export default Register;


import { async } from '@firebase/util';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile] = useUpdateProfile(auth);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();



    const handleRegister = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        //Update Profile
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/login');

    }


    // if (user) {
    //     console.log('user', user)
    //     navigate('/login')
    // }


    const navigateRegister = event => {
        navigate('/login');
    }
    return (
        <div className='container w-25 mx-auto '>
            <h2 className='mt-5 mb-5 text-primary text-center'>Please Register</h2>

            <Form className='fs-3 ' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Your Name" ref={nameRef} required />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name="email" placeholder="Enter email" ref={emailRef} required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name="password" placeholder="Password" ref={passwordRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className='fs-4' className={agree ? 'text-primary' : 'text-danger'} type="checkbox" label="Accept Genius Car and Conditions" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Register
                </Button>

            </Form>
            <br />
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister} >Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;