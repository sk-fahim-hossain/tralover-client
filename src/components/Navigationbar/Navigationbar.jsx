import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './Navigationbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthProvider';
import { AutoComplete, InputGroup } from 'rsuite';



const styles = {
  width: 300,
  marginBottom: 10
};


const Navigationbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const [bg, setBg] = useState('white')
  const location = useLocation()
  const currentRoute = location.pathname
  const navigate = useNavigate()



  useEffect(() => {
    if (currentRoute === '/login' || currentRoute === '/register' || currentRoute === '/hotel' || currentRoute === '/about' || currentRoute === '/things-to-do') {
      setBg('black');
    } else {
      setBg('white');
    }
  }, [currentRoute]);



  const handleLogOut = () => {
    logOut()
      .then(() => {

      }).catch((error) => {
        console.log(error.message)
      });
  }

  const goToTheLocation = (item) => {
    navigate(`${'/things-to-do'}`)
  }

  const data = ['coxs bazar', 'shundarban', 'ptengga', 'jaflong']
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-transparent text-light">

      <Container>
        <Link to="/">
          <img src={logo} alt="" className='brand-logo' />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " style={{ background: "linear-gradient(45deg,#7C9B33, #FFBC09)" }} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto cursor-pointer">
            <div className="search">
              <InputGroup inside style={styles}>
                <AutoComplete data={data} onSelect={goToTheLocation} />
                <InputGroup.Addon>
                <FaSearch />
                </InputGroup.Addon>
              </InputGroup>
              {/* <span className="fa fa-search"><FaSearch /></span>
              <input placeholder="Search Destination" /> */}
            </div>
          </Nav>
          <Nav className='align-items-center text-white'>
            <Nav.Link as={Link} to={'/'} className={`text-${bg}`}>Home</Nav.Link>
            <Link to="/things-to-do" as={Link} className={`text-${bg} text-decoration-none`}>Things To Do</Link>

            
            <Nav.Link as={Link} to="/about" className={`text-${bg}`}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/places/contact" className={`text-${bg}`}>Contact</Nav.Link>
            {
              user?.email ?  <Button onClick={handleLogOut} className="bg-warning btn-outline-warning text-black btn-sm">Sign Out</Button> :
                <Link to="/login"><Button className="bg-warning btn-outline-warning text-black btn-sm">Login</Button></Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;