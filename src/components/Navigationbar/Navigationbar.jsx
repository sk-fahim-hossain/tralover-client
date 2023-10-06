import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './Navigationbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthProvider';


const Navigationbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const [bg, setBg] = useState('white')
  const location = useLocation()
  const currentRoute = location.pathname


  
  useEffect(() => {
    if (currentRoute === '/login' || currentRoute === '/register' || currentRoute === '/hotel') {
      setBg('black');
    } else {
      setBg('white');
    }
  }, [currentRoute]);



  const handleLogOut = () =>{
    logOut()
    .then(() => {
     
    }).catch((error) => {
     console.log(error.message)
    });
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-transparent text-light">

      <Container>
        <Link to="/">
          <img src={logo} alt="" className='brand-logo' />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " style={{background: "linear-gradient(45deg,#7C9B33, #FFBC09)"}} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto cursor-pointer">
            <div className="search">
              <span className="fa fa-search"><FaSearch /></span>
              <input placeholder="Search Destination" />
            </div>
          </Nav>
          <Nav className='align-items-center text-white'>
            <Nav.Link href="#features" className={`text-${bg}`}>News</Nav.Link>
            <Link to="/" className={`text-${bg} text-decoration-none`}>Destination</Link>
            <Nav.Link href="#pricing" className={`text-${bg}`}>Blog</Nav.Link>
            <Nav.Link href="#pricing" className={`text-${bg}`}>Contact</Nav.Link>
            {
              user?.email ? <><Link className={`text-${bg} text-bold`}> {user?.email}</Link> <Button onClick={handleLogOut} className="ms-2 bg-warning btn-outline-warning text-black">Sign out</Button></> :
                <Link to="/login"><Button className="bg-warning btn-outline-warning text-black">Login</Button></Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;