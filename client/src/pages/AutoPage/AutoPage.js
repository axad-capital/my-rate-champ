import React from 'react';
import NavAuto from '../../components/NavComp/NavAuto/NavAuto';
import './autoPage.css';
import QuoteForm from '../../components/Forms/AutoForm/AutoForm';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ResearchImg from './images/research.png';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Footer from '../../components/Footer/Footer';
import AutoHeaderImg from './images/auto-head.png';

const HomePage = () => {
  return (
    <div>
      <NavAuto />
      <br />
      <br />
      <div className='img-form-container'>
        <div className='auto-header-img-container'>
          <img className='auto-header-img' src={AutoHeaderImg} alt="car-header" />
        </div>
        <div id='quote-form'>
          <QuoteForm />
        </div>
      </div>
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
      </div>

      <div id='about-me' className='about-me-container'>
        <h1 className='header-h1'>We Work For You Not The Insurance Companies.</h1>
        <p>We do not work with any insurance companies specifically, so you can expect to get the absolute best option for you without needing to worry about us pushing you into a choice that might not be your best fit.</p>
        <button className='get-btn' onClick={() => window.location.href = '#quote-form'}>Get A Quote</button>
      </div>
      <div className='about-me'></div>

      <div id="process" className='steps'>
        <h2>Get Insured In Only <span>3</span> Easy Steps!</h2>
        <br />
        <p>1. Fill out the the Quote Form.</p>
        <p>2. Choose the best insurance from your car.</p>
        <p>3. Activate your policy instantly!</p>
      </div>

      <div className='process-container'>
        <div>
          <h2>We Make Insurance Compliance Fight For Your Business.</h2>
        </div>
        <div>
          <AccessTimeIcon className='process-icon' />
          <h4>Save Time</h4>
          <p>Request your quote online in minutes. It's easy and FREE.</p>
        </div>
        <div>
          <AttachMoneyIcon className='process-icon' />
          <h4>Save Money</h4>
          <p>Get the rate that fits your budget by comparing multiple Auto Insurance Carriers.</p>
        </div>
        <div>
          <DirectionsCarIcon className='process-icon' />
          <h4>Fast Coverage</h4>
          <p>A free quote takes minutes. Get an easy car insurance quote today!</p>
        </div>
      </div>

      <div className='why-us'>
        <h2><PsychologyIcon />Why Choose Us?</h2>
        <br />
        <div className='line'></div>
        <p>We have the best options in car insurance ready for you at the click of a button. Fill out a form at NO expense you will have your best and most affordable option readily available to you.</p>
      </div>
      <table className='why-table-container'>
        <thead>
          <tr>
            <th>Advance Features</th>
            <th>Comprehensive</th>
            <th>Third-Party</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>Instant Online Buying</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>No Hidden Fees</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Wind Range Of Major Insurance</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Save Time And Money</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>100% Independent</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Compare Cost And Futures</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Available 24/7</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>No Claim Bonus</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Claim Settlement Ratio</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Own Damage Cover</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Damages to Third-Party</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Third party's death or injury</td>
            <td>✔️</td>
            <td>❌</td>
          </tr>
        </tbody>
      </table>

      <div className='researcher'>
        <div className='researcher-info'>
          <h2>Research shows that <span>51% of customers</span> who search for car insurance <span> save up to 30%</span> on their annual premium. Get your quote today.</h2>
          <button className='get-btn' onClick={() => window.location.href = '#quote-form'}>Get A Quote</button>
        </div>
        <img src={ResearchImg} alt="researcher" />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage