import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import './Login.css'
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { logIn, googleLogIn } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        logIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
        console.log(email, password);
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
        <div className="mx-auto">
            <Container className=''>
                <div className='login-container p-4 bg-light mt-3'>
                    <h3>Please Login</h3>
                    <Form onSubmit={handleLogin}>
                        <div>{error && <p className='text-danger  p-2 rounded d-inline my-2'>{error}</p>}</div>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label className='mt-3'>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <div className="d-flex ">
                            <Form.Group className="mb-3 me-auto remember-check" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Link className="btn btn-link text-warning " style={{fontSize:'15px'}}>Forget Password</Link>
                        </div>

                        <Button className="w-100" variant="warning" type="submit">
                            Login
                        </Button>
                        <p className='text-center pt-4'>Don't have any account? <Link className='text-warning' to="/register">Create an account</Link></p>
                    </Form>
                    <div className='d-flex align-items-center justify-content-center'>
                        <hr className='text-black w-25 me-3' />
                        <span>Or</span>
                        <hr className='text-black w-25 ms-3' />
                    </div>
                    {/* sign with google button */}
                    <div onClick={hangleGoogleSignIn} className='d-flex align-items-center justify-content-center auth-btn'>
                        <div className='icon-btn border border-2  w-75 rounded-pill '>
                            <FcGoogle className='google-icon'></FcGoogle>
                            <p className='google-icon-text'>Continue with Google</p>
                        </div>
                    </div>
                    {/* sign with facebook button */}
                    <div className='d-flex align-items-center justify-content-center mt-2 auth-btn'>
                        <div className='icon-btn border border-2  w-75 rounded-pill '>
                            <BsFacebook className='google-icon text-primary'></BsFacebook>
                            <p className='google-icon-text'>Continue with Facebook</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;