import React from 'react';
import './lifeForm.css';

const LifeForm = () => {
    return (
        <div>
            <div className='life-form-container'>
                <h1>Focus On What Really Matters</h1>
                <p>You Could Be Eligible To Get Coverage For As Little As $15/Month*</p>
                <div className='life-form-info'>
                    <label htmlFor="life-zip">Zipcode</label>
                    <input name='life-zip' type="number" placeholder='Zipcode' />
                    <label htmlFor="life-birth">Your Date Of Birth</label>
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
                        <option value="10000">10000</option>
                        <option value="20000">20000</option>
                        <option value="30000">30000</option>
                        <option value="40000">40000</option>
                        <option value="50000">50000</option>
                        <option value="60000">60000</option>
                        <option value="70000">70000</option>
                        <option value="80000">80000</option>
                        <option value="90000">90000</option>
                        <option value="100000">100000</option>
                        <option value="110000">110000</option>
                        <option value="120000">120000</option>
                        <option value="130000">130000</option>
                        <option value="140000">140000</option>
                        <option value="150000">150000</option>
                        
                    </select>
                </div>
            </div>
        </div>
    )
}

export default LifeForm