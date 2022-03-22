import React from 'react';
import './form.css';
import QuoteCar from './quote-car.png';

const Form = () => {

    function quoteFormHandler() {
        window.location.href = '/thank-you'
    }

    return (
        <div>
            <div className='quote-form'>
                <img className='quote-car' src={QuoteCar} alt="car" />
                <h1 id='quote-heading'>Get A Free Quote Now</h1>
                <p>Stay Home & Renew Car Insurance In 2 Minutes</p>
                <div className='input-container'>
                    <input className='form-input' type="text" placeholder='Full Name' />
                    <input className='form-input' type="text" placeholder='Email' />
                </div>
                <div className='input-container'>
                    <input className='form-input' type="text" placeholder='Phone Number' />
                    <input className='form-input' type="text" placeholder='State' />
                </div>
                <div className='input-container'>
                    <input className='form-input' type="text" placeholder='Zip Code' />
                    <button className='form-btn' onClick={quoteFormHandler}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Form