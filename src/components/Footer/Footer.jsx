import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    const stringYear = new Date();
    const year = stringYear.getFullYear()

    return (

        <footer>
            <div className="container">
                <div class="row primary">


                    <div class="column links">


                        <ul>

                            <li>
                                <Link to="/places/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/places/home">Destination</Link>
                            </li>
                            <li>
                                <Link to="/places/home">Destination</Link>
                            </li>
                            <li>
                            <Link to="/places/home">Support</Link>
                            </li>
                        </ul>

                    </div>

                    <div class="column links">

                        <ul>
                            <li>
                            <Link to="/places/home">About Us</Link>
                            </li>
                            <li>
                            <Link to="/places/home">Contact</Link>
                            </li>
                            <li>
                                <a href="#terms-of-services">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#support">Support</a>
                            </li>
                        </ul>
                    </div>

                    <div class="column subscribe">
                        <h3>Newsletter</h3>
                        <div >
                            <input type="email" placeholder="Your email id here" />
                            <button className='mt-3'>Subscribe</button>
                        </div>

                    </div>

                </div>

                <div class="row " id='copyright'>

                    <p>Copyright &copy; {year} Fahim Developer</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;