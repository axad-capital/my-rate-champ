import React from 'react'
import './thankYouAuto.css'
// import NavHome from '../../../components/NavComp/NavHome/NavHome'

const ThankYouAuto = () => {
    function goBack() {
        localStorage.clear()
        window.location.href = '/'
    }
    return (
        <div>
            <button className='go-back' onClick={goBack}>Done</button>
            <div>
                <h1 className='thank-you'>
                    Click on 2 or more Insurance Partners below to compare quotes and maximize your savings.
                </h1>
                {/* Offer Conversion: MyRateChamp.com - Auto Insurance - US */}
                <iframe title='pixel' src="https://www.a1jkghtrk.com/?nid=1715&oid=1279&amount=AMOUNT" scrolling="no" frameborder="0" width="1" height="1"></iframe>
                {/* End Offer Conversion */}
            </div>
        </div>
    )
}

export default ThankYouAuto