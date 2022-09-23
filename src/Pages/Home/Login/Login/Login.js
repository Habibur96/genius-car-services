import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,

    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
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
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> <br />
            <p>New to genius car? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin} >Please Register</Link></p>

            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Login;