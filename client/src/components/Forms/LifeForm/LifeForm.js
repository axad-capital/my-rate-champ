import React from 'react';
import './lifeForm.css';

const LifeForm = () => {

    function handleLifeFormSubmit() {
        let zip = document.getElementById('zip').value
        localStorage.setItem('zipcode', zip)
        window.location.href = '/thank-you-life'
    }

    return (
        <div>
            <div id='life-form' className='life-form-container'>
                <h1>Focus On What Really Matters</h1>
                <p>You Could Be Eligible To Get Coverage For As Little As $15/Month*</p>
                <div className='life-form-info'>
                    <label htmlFor="life-zip">Zipcode</label>
                    <input id='zip' name='life-zip' type="number" placeholder='Zipcode' />
                    {/* <label htmlFor="life-birth">Your Date Of Birth</label>
                    <input name='life-birth' type="date" />
                    <label htmlFor="coverage-type">Coverage Type</label>
                    <select type="text" name="coverage-type">
                        <option value="Term 1 Year">Term 1 Year</option>
                        <option value="Term 5 Years">Term 5 Years</option>
                        <option value="Term 10 Years">Term 10 Years</option>
                        <option value="Term 15 Years">Term 15 Years</option>
                        <option value="Term 20 Years">Term 20 Years</option>
                        <option value="Term 25 Years">Term 25 Years</option>
                        <option value="Term 30 Years">Term 30 Years</option>
                        <option value="Term 40 Years">Term 40 Years</option>
                        <option value="Whole Life">Whole Life</option>
                        <option value="Universal Life">Universal Life</option>
                        <option value="Variable Life">Variable Life</option>
                        <option value="Investment">Investment</option>
                        <option value="Cash Value">Cash Value</option>
                        <option value="Final Expense">Final Expense</option>
                        <option value="Not Sure">Not Sure</option>
                    </select>
                    <label htmlFor="coverage-amount">Coverage Amount</label>
                    <select name="coverage-amount">
                        <option value="10000-100000">10,000-100,000</option>
                        <option value="100000-200000">100,000-200,000</option>
                        <option value="200000-300000">200,000-300,000</option>
                        <option value="300000-400000">300,000-400,000</option>
                        <option value="400000-500000">400,000-500,000</option>
                        <option value="500000-600000">500,000-600,000</option>
                        <option value="600000-700000">600,000-700,000</option>
                        <option value="700000-800000">700,000-800,000</option>
                        <option value="800000-900000">800,000-900,000</option>
                        <option value="900000-1000000">900,000-1,000,000</option>
                        <option value="1000000+">1,000,000 +</option>
                    </select> */}
                    <p>Get A Free Quote In Seconds</p>
                    <button onClick={handleLifeFormSubmit} className='life-form-btn'>SUBMIT</button>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default LifeForm