import React from 'react';
import './homePage.css';
import QuoteForm from '../../components/Form/Form';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const HomePage = () => {
  return (
    <div>
      <div className='header'>
        <h1 className='header-h1'>Save Up To <span> 30% </span>On Your Car Insurance In Minutes.</h1>
        <div className='header-container'>
          <div className='header-info'>
            <AttachMoneyIcon />
            <p>SAVINGS MINUTES AWAY</p>
          </div>
          <div className='header-info'>
            <DirectionsCarIcon />
            <p>20+ INSURANCES TO CHOOSE FROM</p>
          </div>
          <div className='header-info'>
            <CheckIcon />
            <p>THOUSANDS OF VEHICLES INSURED</p>
          </div>
        </div>
        <p className='header-legal'>*TP price for less than 1000 CC cars. All savings are provided by insurers as per Gov. approved insurance plan. Standard T&C apply.</p>
      </div>
      <div id='quote-form'>
        <QuoteForm />
      </div>

      <div id='about-me' className='about-me-container'>
        <h1 className='header-h1'>We Work For You Not The Insurance Companies.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl duis turpis id purus volutpat volutpat. Vitae pretium tincidunt varius amet massa. Mauris vitae quis purus eu fringilla facilisis pellentesque sed. Sit nunc in purus placerat laoreet nibh.</p>
        <button className='get-btn' onClick={() => window.location.href = '#quote-form'}>Get A Quote</button>
      </div>

      <div id="process" className='steps'>
        <h2>Get Insured In Only <span>3</span> Easy Steps!</h2>
        <br />
        <p>1. Fill out the the Quote Form.</p>
        <p>2. Choose the best insurance from your car.</p>
        <p>3. Activate your policy on the spot with no times!</p>
      </div>

      <div className='process-container'>
        <div>
          <h2>We Make Insurance Compliance Fight For Your Business.</h2>
        </div>
        <div>
          <AccessTimeIcon  className='process-icon' />
          <h4>Save Time</h4>
          <p>Request your quote online in minutes. It's easy and FREE.</p>
        </div>
        <div>
          <AttachMoneyIcon  className='process-icon' />
          <h4>Save Money</h4>
          <p>Get the rate that fits your budget by comparing multiple Auto Insurance Carriers.</p>
        </div>
        <div>
          <DirectionsCarIcon  className='process-icon' />
          <h4>Fast Coverage</h4>
          <p>A free quote takes minutes. Get an easy car insurance quote today!</p>
        </div>
      </div>

      <div className='why-us'>
          <h2>Why Choose Us?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequuntur atque? Ipsa quidem id eius sit iste pariatur a dolorum vel blanditiis! Temporibus eveniet animi, sequi molestias earum a, numquam quam sit voluptatem ex vitae quos soluta ipsa omnis in.</p>
      </div>

    </div>
  )
}

export default HomePage