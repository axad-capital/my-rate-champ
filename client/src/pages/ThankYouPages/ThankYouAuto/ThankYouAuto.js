import React from 'react'
import './thankYouAuto.css'
// import NavHome from '../../../components/NavComp/NavHome/NavHome'

const ThankYouAuto = () => {
    function goBack() {
        localStorage.clear()
        window.location.href = '/'
    }
    // return (
    //     <div>
    //         <button className='go-back' onClick={goBack}>Done</button>
    //         <div>
    //             <h1 className='thank-you'>
    //                 Click on 2 or more Insurance Partners below to compare quotes and maximize your savings.
    //             </h1>
    //             {/* Offer Conversion: MyRateChamp.com - Auto Insurance - US */}
    //             <iframe title='auto-pixel' src="https://offers.axtracking.com/aff_l?offer_id=1279" scrolling="no" frameborder="0" width="1" height="1"></iframe>
    //             <iframe title='pixel' src="https://www.a1jkghtrk.com/?nid=1715&oid=1279&amount=AMOUNT" scrolling="no" frameborder="0" width="1" height="1"></iframe>
    //             {/* End Offer Conversion */}
    //         </div>
    //     </div>
    // )
    let storage = JSON.parse(localStorage.getItem('zipcodeAuto'))
    console.log(storage.result)

    if (storage === null) {
        return (
            <div>
                <button className='go-back' onClick={goBack}>Done</button>
                <h1>No ads to show at this time</h1>
                <iframe title='pixel' src="https://www.a1jkghtrk.com/?nid=1715&oid=1279&amount=AMOUNT" scrolling="no" frameborder="0" width="1" height="1"></iframe>
                <iframe title='auto-pixel' src="https://offers.axtracking.com/aff_l?offer_id=1279" scrolling="no" frameborder="0" width="1" height="1"></iframe>
            </div>
        )
    } else {
        return (
            <div>
                <button className='go-back' onClick={goBack}>Done</button>
                <h1 style={{ width: '80%', margin: '20px auto', textAlign: 'center' }}>Compare Insurance Quotes in Your Area. Click on 2 or more Insurance Partners below to compare quotes and maximize your savings.</h1>
                <br />
                {storage.result.map(ad => (
                    <div className='transparently' onClick={() => window.location.href = ad.clickUrl} key={ad.adCreativeId}>
                        <img style={{ width: '200px' }} src={ad.logoUrl} alt="ad logo" />
                        <div>
                            <h2>{ad.brandName}</h2>
                            <p>{ad.title}</p>
                        </div>
                        <iframe title='pixel' src="https://www.a1jkghtrk.com/?nid=1715&oid=1279&amount=AMOUNT" scrolling="no" frameborder="0" width="1" height="1"></iframe>
                        <iframe title='auto-pixel' src="https://offers.axtracking.com/aff_l?offer_id=1279" scrolling="no" frameborder="0" width="1" height="1"></iframe>
                    </div>
                ))}
            </div>
        )
    }
}

export default ThankYouAuto