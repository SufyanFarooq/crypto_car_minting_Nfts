import React from 'react'
import './Footer.css'
function Footer({setPolicy, setTerms}) {
    return (
        <div className='footerContainer'>
            <div className="footerInner">
                <div > 
                    <span>Copyright ©️ <a href='#'>cryptocarclub.co</a> 2021 All Rights Reserved</span>
                </div>
                <br/>
                <div className='footertext'>
                    <span onClick={()=>setPolicy()}>Privacy policy</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span onClick={()=>setTerms()}>Term of services</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
