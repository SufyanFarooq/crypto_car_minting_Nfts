import React from 'react'
import './LandPage.css'
function LandPage() {
    return (
        <div className='landPagevideo mt-5'>
            <video  src='finalcrypto.mp4' loop muted autoPlay/>
            <div className='landPageText text-white'>
                <p>
                    RACE, EARN, MOD, TRADE AND BECOME A VIP MEMBER
                </p>
            </div>
        </div>
    )
}

export default LandPage
