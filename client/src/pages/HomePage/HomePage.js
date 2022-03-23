import React from 'react';
import './homePage.css';
import NavHome from '../../components/NavComp/NavHome/NavHome';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsurancePic from './insurancepic.png';

const HomePage = () => {
  return (
    <div>
        <NavHome />
        <div className='main-header'>
            <h1>My Rate Champ</h1>
            <p>We find the BEST insurance plan for you, start by clicking one of our three options.</p>
        </div>
        <div className='line'></div>
        <div className='insurance-container'>
            <div onClick={() => window.location.href = '/auto-insurance'} className='insurance-card auto-card'>
                <h1>Auto Insurance</h1>
                <DirectionsCarIcon/>
            </div>
            <div onClick={() => window.location.href = '/health-insurance'} className='insurance-card health-card'>
                <h1>Health Insurance</h1>
                <LocalHospitalIcon/>
            </div>
            <div onClick={() => window.location.href = '/life-insurance'} className='insurance-card life-card'>
                <h1>Life Insurance</h1>
                <FavoriteBorderIcon/>
            </div>
        </div>
        <div className='insurance-pic-container'>
            <img className='insurance-pic' src={InsurancePic} alt="insurance" />
        </div>
    </div>
  )
}

export default HomePage