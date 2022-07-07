import React, { useState } from 'react';
import './form.css';

const Form = () => {

    const [blankHandler, setBlankHandler] = useState('')

    function quoteFormHandler() {
        // if (document.getElementById('auto-zip').value === null || document.getElementById('auto-zip').value === '' || document.getElementById('auto-zip').value.length < 5) {
        //     setBlankHandler('You Must Enter A Valid Zipcode!')
        //     return
        // }
        // let autoZip = document.getElementById('auto-zip').value
        // localStorage.setItem('zipcodeAuto', autoZip)
        // window.location.href = '/thank-you-auto'
        if (document.getElementById('state').value === '' || document.getElementById('home-owner').value === '' || document.getElementById('insured').value === '' || document.getElementById('age').value === '') {
            setBlankHandler('All fields required')
            return
        }

        if (parseInt(document.getElementById('age').value) <= 0) {
            setBlankHandler('Please enter a valid age')
            return
        }

        let userInput = {
            "state": document.getElementById('state').value,
            "pubcampaignid": "6364",
            "vertical": "2",
            "age": document.getElementById('age').value,
            "homeowner": document.getElementById('home-owner').value,
            "currentlyinsured": document.getElementById('insured').value
        }

        fetch('https://api.transparent.ly/search/blue/green', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInput)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('zipcodeAuto', JSON.stringify(data))
                window.location.href = '/thank-you-auto'
            })
    }

    return (
        <div>
            <div className='quote-form'>
                <h1 id='quote-heading'>Get A Free Quote Now</h1>
                <p>Stay Home & Find Affordable Car Insurance In 2 Minutes</p>
                <div className='auto-form'>

                    <label className='zip-code-label' htmlFor="zip">Enter Your Zipcode</label>
                    <input id='auto-zip' name='zip' className='form-input' type="text" placeholder='Zipcode' />
                    <br />

                    <label htmlFor="state"><strong>Please choose the current state you're in</strong></label>
                    <select style={{ padding: '10px' }} id='state' className='form-input' name="state">
                        <option disabled selected value=''> -- Select An Option -- </option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <br />

                    <label htmlFor="home-owner"><strong>Are you a homeowner?</strong></label>
                    <select style={{ padding: '10px' }} id='home-owner' className='form-input' name="home-owner">
                        <option disabled selected value=''> -- Select An Option -- </option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                    <br />

                    <label htmlFor="insured"><strong>Are you a insured?</strong></label>
                    <select style={{ padding: '10px' }} id='insured' className='form-input' name="insured">
                        <option disabled selected value=''> -- Select An Option -- </option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                    <br />

                    <label htmlFor="age"><strong>Enter your age</strong></label>
                    <input style={{ padding: '10px' }} id='age' className='form-input' type="number" placeholder='Enter your age' />
                    <br />

                    <button className='form-btn disable' onClick={quoteFormHandler}>Submit</button>
                    <br />
                    <p style={{ color: 'red', textAlign: 'center' }} >{blankHandler}</p>
                </div>
            </div>
        </div>
    )
}

export default Form