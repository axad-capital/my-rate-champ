import React from 'react'
// import NavHome from '../../../components/NavComp/NavHome/NavHome'

const ThankYouHealth = () => {
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
            </div>
        </div>
    )
}

export default ThankYouHealth