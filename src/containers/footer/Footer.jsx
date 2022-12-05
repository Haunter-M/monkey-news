import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'id='footer'>
    <div className='gpt3__footer-heading'>
      <h1 className='gradient__text'>See you on the wild side</h1>
    </div>
    <div className='gpt3__footer-btn'>
      <p>JUST DO IT ALREADY!</p>
    </div>

    <div className='gpt3__footer-links'>
      <div className='gpt3__footer-links_logo'>
        <img src={gpt3Logo} alt="logo" />
        <p>SloppyMoistMeat                                  All Rights Reserved</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Monkey Newsletter</h4>
        <p>Merchandise</p>
        <p>Marketplace</p>
        <p>Twitter</p>
        <p>Referral</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>SloppyMoistMeat</h4>
        <p>Twitch.tv</p>
        <p>Twitter</p>
        <p>Youtube</p>
        <p>Contact</p>
        </div>
        <div className='gpt3__footer-copyright'>
          <p>© 2022 SloppyMoistMeat. All rights reserved.</p>
          </div>
     </div>
    </div>
  )
}

export default Footer