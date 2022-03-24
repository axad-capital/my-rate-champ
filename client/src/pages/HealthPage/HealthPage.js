import React from 'react';
import './healthPage.css';
import NavHealth from '../../components/NavComp/NavHealth/NavHealth';
import HealthForm from '../../components/Forms/HealthForm/HealthForm';
import HealthHeaderImg from './health-header-img.png';

const HealthPage = () => {
  return (
    <div>
      <NavHealth />
      <br />
      <br />
      <HealthForm />
      <br />
      <br />
      <div id='health-about' className='health-header'>
        <h1 className='health-header-title'>Find the Affordable <span>Health Insurance</span> Coverage you Need.</h1>
        <h2>Compare Low-Cost Health Plans!</h2>
        <h2 className='health-header-subtitle'>Save up to <span>50%</span> on Health Insurance.</h2>
        <h3>Easy, Fast, and Free - Get your free quote now!</h3>
        <br />
        <div>
          <button className='health-form-btn' onClick={() => window.location.href = '#health-form'}>Get A Quote</button>
        </div>
        <div className='health-header-img-container'>
          <img className='health-header-img' src={HealthHeaderImg} alt="health header" />
        </div>
      </div>
      <div id='process' className='health-process'>
        <h1 className='health-process-title'>To get a free quote, just enter some brief information and get your quote in minutes.</h1>
        <div>
          <h3>Licensed health insurance agents are available to speak with you.</h3>
          <p>Step 1.</p>
          <p>Answer A Few Easy Questions</p>
          <p>Step 2.</p>
          <p>Find Life Insurance Plans That Fits Your Budget</p>
          <p>Step 3.</p>
          <p>Request A Free Quote And Start SAVING MONEY!</p>
        </div>
      </div>
    </div>
  )
}

export default HealthPage