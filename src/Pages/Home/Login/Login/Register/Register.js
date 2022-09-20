import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    // const nameRef = navigator('');
    // const emailRef = navigator('');
    // const passwordRef = navigator('');
    // const navigate = useNavigate();

    const handleRegister = e => {
        const a = e.target.value;
        console.log(a)
    }


    const navigateRegister = event => {
        // navigate('/login');
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-primary'>Please Register</h2>

            <Form className='fs-3 '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleRegister} variant="primary" type="submit">
                    Submit
                </Button>
            </Form> <br />
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister} >Please Login</Link></p>
        </div>
    );
};

export default Register;