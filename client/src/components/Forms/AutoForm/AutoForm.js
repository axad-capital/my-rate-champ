import React, {useState} from 'react';
import './form.css';
// import { v4 as uuidv4 } from 'uuid'

const Form = () => {

    // function quoteFormHandler() {

    //     fetch('https://api.ipify.org/?format=json')
    //         .then(result => result.json())
    //         .then(data => {

    //             let autoData = {
    //                 id: uuidv4(),
    //                 firstName: document.getElementById('first').value,
    //                 lastName: document.getElementById('last').value,
    //                 birth: document.getElementById('bday').value,
    //                 age: document.getElementById('age').value,
    //                 email: document.getElementById('email').value,
    //                 homeOwner: document.getElementById('home-owner').value,
    //                 insured: document.getElementById('insured').value,
    //                 vehicles: document.getElementById('vehicles').value,
    //                 phone: document.getElementById('phone-num').value,
    //                 zipcode: document.getElementById('zip').value
    //             }

    //             fetch('http://datapass.quinstage.com/calls/auto/callsping?quadTag={quad_tag}', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: {
    //                     'tracking': {
    //                         'content_type': 'xml/json',
    //                         'ni_ad_client': '',
    //                         'ni_zc': autoData.zip,
    //                         'ip': data.ip,
    //                         'ua': navigator.userAgent,
    //                         'ni_var1': autoData.id,
    //                         'ni_ref': '/auto-thank-you'
    //                     },
    //                     'contact': {
    //                         'first_name': autoData.firstName,
    //                         'last_name': autoData.lastName,
    //                         'email': autoData.email,
    //                         'zip': autoData.zip,
    //                         'homeowner': autoData.homeOwner,
    //                     },
    //                     'current_insurance': {
    //                         'currently_insured': autoData.insured,
    //                     },
    //                     'requested_coverage': {
    //                         'vehicle_count': autoData.vehicles,
    //                     },
    //                     'individuals': {
    //                         'birthdate': autoData.birthdate,
    //                         'age': autoData.age
    //                     }
    //                 }
    //             })

    //         })



    //     // window.location.href = '/thank-you-auto'
    // }

    const  [blankHandler, setBlankHandler] = useState('')

    function quoteFormHandler() {
        if (document.getElementById('auto-zip').value === null || document.getElementById('auto-zip').value === '' || document.getElementById('auto-zip').value.length < 5) {
            setBlankHandler('You Must Enter A Valid Zipcode!')
            return
        }
        let autoZip = document.getElementById('auto-zip').value
        localStorage.setItem('zipcodeAuto', autoZip)
        window.location.href = '/thank-you-auto'
    }

    return (
        <div>
            <div className='quote-form'>
                <h1 id='quote-heading'>Get A Free Quote Now</h1>
                <p>Stay Home & Find Affordable Car Insurance In 2 Minutes</p>
                <div className='auto-form'>

                    {/* <label htmlFor="first">First Name</label>
                    <input id='first' name='first' className='form-input' type="text" placeholder='First Name' />

                    <label htmlFor="last">Last Name</label>
                    <input id='last' name='last' className='form-input' type="text" placeholder='Last Name' /> */}

                    <label className='zip-code-label' htmlFor="zip">Enter Your Zipcode</label>
                    <input id='auto-zip' name='zip' className='form-input' type="text" placeholder='Zipcode' />

                    {/* <label htmlFor="email">Email</label>
                    <input id='email' name='email' className='form-input' type="text" placeholder='Email' />

                    <label htmlFor="bday">Date of Birth</label>
                    <input id='bday' name='bday' className='form-input' type="date" /> */}

                    {/* <label htmlFor="vehicles">Current Age</label>
                    <input id='age' name='age' className='form-input' type="number" placeholder='Age' /> */}

                    {/* <label htmlFor="home-owner">Are you a Home Owner?</label>
                    <select id='home-owner' className='form-input' name="home-owner">
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>

                    <label htmlFor="insured">Are you currently insured?</label>
                    <select id='insured' className='form-input' name="insured">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select> */}

                    {/* <label htmlFor="vehicles">How Many Vehicles Do You Own</label>
                    <input id='vehicles' name='vehicles' className='form-input' type="number" placeholder='Vehicle Count' /> */}

                    {/* <label htmlFor="phone-num">Phone Number</label>
                    <input id='phone-num' name='phone-num' className='form-input' type="text" placeholder='Phone Number' /> */}

                    <br />
                    <button className='form-btn disable' onClick={quoteFormHandler}>Submit</button>
                    <br />
                    <p style={{color: 'red', textAlign: 'center'}} >{blankHandler}</p>
                </div>
            </div>
        </div>
    )
}

export default Form