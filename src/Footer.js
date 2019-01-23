import React from 'react'

const Footer = () => (
    <section className="section-footer">
        <div className="container">
            <div className='row'>
                <div className='col-md-6'>
                    © 2019 Minden jog fenntartva! Görgey Arthúr Akadémia
                            </div>
                <div className='col-md-6'>
                    <img className='svg-icon' src={require('./images/twitter.svg')} width='20' alt="Twitter" />
                    <img className='svg-icon' src={require('./images/linkedin.svg')} width='20' alt="Linkedin" />
                    <img className='svg-icon' src={require('./images/mail.svg')} width='20' alt="Mail" />
                    <img className='svg-icon' src={require('./images/facebook.svg')} width='20' alt="Facebook" />
                </div>
            </div>
        </div>
    </section>
)

export default Footer