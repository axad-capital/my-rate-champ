import React, {useState} from 'react';
import './healthForm.css';

const HealthForm = () => {

    const  [blankHandler, setBlankHandler] = useState('')

    function healthFormHandler() {
        if (document.getElementById('health-zip').value === null || document.getElementById('health-zip').value === '' || document.getElementById('health-zip').value.length < 5) {
            setBlankHandler('You Must Enter A Valid Zipcode!')
            return
        }
        let healthZip = document.getElementById('health-zip').value
        localStorage.setItem('zipcodeHealth', healthZip)
        window.location.href = '/thank-you-health'
    }

    return (
        <div>
            <div id='health-form' className='quote-form'>
                <h1 className='health-form-title'>Getting Health Insurance Is Affordable</h1>
                <p>Easily find the top health insurance quotes in your area instantly!</p>
                <div className='health-form-container'>
                    <div className='input-container health-form'>
                        <label className='zip-code-label' htmlFor="zipcode">Enter Your Zipcode</label>
                        <input id='health-zip' className='form-input health-form-input' type="text" name='zipcode' placeholder='Zipcode' required />
                        {/* <label htmlFor="date">Date of Birth</label>
                        <input className='form-input health-form-input' type="date" name='date' placeholder='Date of Birth' required />
                        <label htmlFor="credit">Credit Score</label>
                        <select className='form-input health-form-input' name="credit" id="credit" required>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Average">Average</option>
                            <option value="Below Average">Below Average</option>
                            <option value="Poor">Poor</option>
                        </select> */}
                    </div>
                    <div className='input-container health-form'>
                        {/* <label htmlFor="coverageType">Coverage Type</label>
                        <select className='form-input health-form-input' name="coverageType" id="coverageType" required>
                            <option value="individual">Individual Family</option>
                            <option value="shortTerm">Short Term</option>
                            <option value="cobra">COBRA</option>
                            <option value="discountPlan">Discount Plan</option>
                            <option value="medicaid">Medicaid</option>
                            <option value="maternity">Maternity Only</option>
                            <option value="dental">Dental Only</option>
                            <option value="vision">Vision Only</option>
                            <option value="prescription">Prescription Only</option>
                            <option value="other">Other Health</option>
                        </select>
                        <label htmlFor="insured">Insured</label>
                        <select className='form-input health-form-input' name="insured" id="insured" required>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select> */}
                        <button className='form-btn health-btn' onClick={healthFormHandler}>Submit</button>
                    </div>
                    <p>By Clicking “Submit” you agree that you are over 18+ years and older.</p>
                    <br />
                    <p style={{color: 'red', textAlign: 'center'}} >{blankHandler}</p>
                </div>
            </div>
        </div>
    )
}

export default HealthForm
