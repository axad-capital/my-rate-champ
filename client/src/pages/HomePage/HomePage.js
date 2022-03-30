import React from 'react';
import './homePage.css';
import NavHome from '../../components/NavComp/NavHome/NavHome';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsurancePic from './insurancepic.png';
import Footer from '../../components/Footer/Footer'


const HomePage = () => {
    return (
        <div>
            <NavHome />
            <div className='insurance-container'>
                <div onClick={() => window.location.href = '/auto-insurance'} className='insurance-card auto-card'>
                    <h1>Auto Insurance</h1>
                    <DirectionsCarIcon />
                </div>
                <div onClick={() => window.location.href = '/health-insurance'} className='insurance-card health-card'>
                    <h1>Health Insurance</h1>
                    <LocalHospitalIcon />
                </div>
                <div onClick={() => window.location.href = '/life-insurance'} className='insurance-card life-card'>
                    <h1>Life Insurance</h1>
                    <FavoriteBorderIcon />
                </div>
            </div>
            <div className='line'></div>
            <div className='main-header'>
                <h1>My Rate Champ</h1>
                <p>We find the BEST insurance plan for you, start by clicking one of our three options.</p>
            </div>
            <div className='line'></div>
            <br />
            <div className='home-info-container'>
                <h4 className='home-about'>About MyRateChamp</h4>
                <h3>MyRateChamp.com is a technology company that helps insurance shoppers find the most affordable and comprehensive insurance on the market. We believe that searching for insurance should be an easy and straightforward task, which is why we offer multiple insurance company quotes within minutes of searching.</h3>
                <br />
                <h3> MyRateChamp.com is not an insurance or operating company but helps individuals find insurance carriers. Products and services are provided exclusively by the providers. Descriptions are for informational purposes only and subject to change. Insurance plans may not be available in all states.</h3>
                <br />
                <h3>MyRateChamp.com is not affiliated with any insurance plan nor does it represent or endorse any plan. MyRateChamp.com is not affiliated with or endorsed by the United States government or the federal Medicare program. By using this site, you acknowledge that you have read and agree to the Terms of Service and Privacy Policy.</h3>
            </div>
            <div className='insurance-pic-container'>
                <img className='insurance-pic' src={InsurancePic} alt="insurance" />
            </div>

            <Footer />
        </div>
    )
}

export default HomePage