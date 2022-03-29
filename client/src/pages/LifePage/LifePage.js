import React from 'react';
import './lifePage.css';
import NavLife from '../../components/NavComp/NavLife/NavLife';
import LifeForm from '../../components/Forms/LifeForm/LifeForm';
import LifeImg from './life-img.png';
import LifeHeader from './life-header.png';

const LifePage = () => {

  return (
    <div>

      <div>
        <NavLife />
      </div>
      <br />
      <div className='life-header-container'>
        <div className='life-img-container'>
          <img className='life-header-img' src={LifeHeader} alt="header" />
        </div>
          <LifeForm />
      </div>
      <br />
      <div id='life-about' className='health-header'>
        <h1 className='health-header-title'>Protect Your Family With A <span className='blue'>Low Cost</span> Life Insurance Policy.</h1>
        <br />
        <h2>Discover How Affordable A life Insurance Policy Can Be NOW!</h2>
        <br />
        <h3 className='health-header-subtitle'>You Can Find A Rate That Fits Your Budget Just In Minutes</h3>
        <br />
        <h1>Get A <span className='blue'>FREE</span> Quote With No Obligation -  No Medical Exam Required</h1>
        <br />
        <div>
          <button className='life-form-btn' onClick={() => window.location.href = '#life-form'}>Get A Quote</button>
        </div>
        <div className='health-header-img-container'>
          <img className='health-header-img' src={LifeImg} alt="health header" />
        </div>
      </div>
      <div id='life-process' className='health-process'>
        <h1 className='health-process-title'>To get a free quote, just enter some brief information and get your quote in minutes.</h1>
        <br />
        <h3>Licensed life insurance agents are available to speak with you.</h3>
        <div className='health-steps-container'>
          <div className='health-steps bg-blue'>
            <p>Step 1.</p>
            <div className='small-line'></div>
            <br />
            <p>Tell us about yourself</p>
          </div>
          <div className='health-steps bg-blue'>
            <p>Step 2.</p>
            <div className='small-line'></div>
            <br />
            <p>Find Life Insurance Plans That Fits Your Budget</p>
          </div>
          <div className='health-steps bg-blue'>
            <p>Step 3.</p>
            <div className='small-line'></div>
            <br />
            <p>Request A Free Quote And Start SAVING MONEY!</p>
          </div>
        </div>
        <div>
          <button className='life-form-btn' onClick={() => window.location.href = '#life-form'}>Get A Quote</button>
        </div>
        <br />
      </div>
    </div>
  )
}

export default LifePage