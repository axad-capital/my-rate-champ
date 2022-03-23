import React from 'react';
import './navComp.css';
import { Link, useLocation } from 'react-router-dom';

const NavComp = () => {

    const location = useLocation()

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id='bg-col'>
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'>MyRateChamp <span className='auto-span'>Auto</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href='/' className={location.hash === '' ? 'nav-link active' : 'nav-link'}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href='#about-me' className={location.hash === '#about-me' ? 'nav-link active' : 'nav-link'}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href='#process' className={location.hash === '#process' ? 'nav-link active' : 'nav-link'}>Process</a>
                            </li>
                            {/* <li className="nav-item">
                                <a href='#contact-us' className={location.hash === '#contact-us' ? 'nav-link active' : 'nav-link'}>Contact Us</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavComp