import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MyRateChampLogo from '../myratechamplogo.png'

const NavHome = () => {

    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id='bg-col'>
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'><img className='rate-logo' src={MyRateChampLogo} alt='my rate champ logo'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href='/' className={location.hash === '' ? 'nav-link active' : 'nav-link'}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href='/auto-insurance' className={location.hash === '/auto-insurance' ? 'nav-link active' : 'nav-link'}>Auto Insurance</a>
                            </li>
                            <li className="nav-item">
                                <a href='/health-insurance' className={location.hash === '/health-insurance' ? 'nav-link active' : 'nav-link'}>Health Insurance</a>
                            </li>
                            <li className="nav-item">
                                <a href='/life-insurance' className={location.hash === '/life-insurance' ? 'nav-link active' : 'nav-link'}>Life Insurance</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavHome