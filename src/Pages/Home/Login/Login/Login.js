import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);

    const [
        signInWithEmailAndPassword,
        user, error

    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        navigate('/home')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    let errorElement;
    if (error) {
        console.log(error.message)
        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>

    }

    //Forget Password
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (agree) {

            signInWithEmailAndPassword(email, password);
        }
    }

    const navigateLogin = event => {
        navigate("/register");
    }

    return (
        <div className='container w-25 mx-auto'>

            <h2 className='text-primary mt-5 mb-5'>Please Login</h2>
            <Form className='fs-3 ' onClick={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className='fs-4' className={agree ? 'text-primary' : 'text-danger'} type="checkbox" label="Accept Genius Car and Conditions" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Login
                </Button>
            </Form> <br />
            {errorElement}
            <p>New to genius car? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin} >Please Register</Link></p>
            <p>Forget Password? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={resetPassword} >Reset Password</Link></p>

            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Login;