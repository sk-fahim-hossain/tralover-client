import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AuthContext } from '../../context/AuthProvider';
import './Register.css';


const Register = () => {
    const { createUser, googleLogIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        setError('')
        if (password !== confirmPassword) {
            return setError('Please Enter same password')
        }
        if (!email || !password || !confirmPassword || !firstName) {
            alert('Enter Information Properly')
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
        console.log(firstName, lastName, email, password, confirmPassword);
        form.reset()
    }

    const hangleGoogleSignIn = () => {
        googleLogIn()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="mx-auto register-page">
            <Container className=''>
                <div className="register-container p-4 bg-light mt-3">
                    <h3>Create an account</h3>
                    <Form onSubmit={handleRegister}>
                        <div className='d-flex gap-3 align-items-center'>
                            <Form.Group className="mb-2 w-50" controlId="formBasicEmail">
                                <Form.Label className=''>First Name</Form.Label>
                                <Form.Control type="text" name="firstName" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-2 w-50" controlId="formBasicEmail">
                                <Form.Label className=''>Last Name</Form.Label>
                                <Form.Control type="text" name="lastName" placeholder="" />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label className=''>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirmPassword" placeholder="" />
                        </Form.Group>
                        {error && <p className='text-danger bg-dark p-2 rounded d-inline'>{error}</p>}

                        <Button className="w-100" variant="warning" type="submit">
                            Register
                        </Button>
                        <p className='text-center pt-4'>Already have an account? <Link className='text-warning' to="/login">Login</Link></p>
                    </Form>
                    <div className='d-flex align-items-center justify-content-center'>
                        <hr className='text-black w-25 me-3' />
                        <span>Or</span>
                        <hr className='text-black w-25 ms-3' />
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div onClick={hangleGoogleSignIn} className='d-flex align-items-center justify-content-center'>
                            <div className='icon-btn border border-2  w-75 rounded-pill '>
                                <FcGoogle className='google-icon'></FcGoogle>
                                <p className='google-icon-text text-white '><small>Continue with Google</small></p>
                            </div>
                        </div>
                        {/* sign in with facebook button */}
                        <div className='d-flex align-items-center justify-content-center mt-2'>
                            <div onClick={() => alert('Currently Meta is under Development')} className='icon-btn border border-2  w-75 rounded-pill '>
                                <BsFacebook className='google-icon text-white'></BsFacebook>
                                <p className='google-icon-text text-white '><small>Continue with Facebook</small></p>
                            </div>
                        </div>
                    </div>
                    {/* sign with google button */}

                </div>
            </Container>
        </div>
    );
};

export default Register;