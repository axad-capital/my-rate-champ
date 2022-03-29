import React from 'react'
import NavHome from '../../../components/NavComp/NavHome/NavHome'


const ThankYouLife = () => {
    return (
        <div>
            <NavHome />
            <div>
                <h1 className='thank-you'>
                    Click on 2 or more Insurance Partners below to compare quotes and maximize your savings.
                </h1>
                {/* Offer Conversion: MyRateChamp.com - Life Insurance - US */}
                <iframe title='pixel' src="https://offers.axtracking.com/aff_l?offer_id=1277" scrolling="no" frameborder="0" width="1" height="1"></iframe>
                {/* End Offer Conversion */}
            </div>
        </div>
    )
}

export default ThankYouLife