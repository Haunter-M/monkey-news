import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Sloppy's Monkey Library</h1>
        <p>Sign up below for a monthly monkey newsletter</p>

      <div className='gpt3__header-content__input'>
       <input type="email" placeholder='Email Address'/>
      <button type="button">Get Started</button>
      </div>

      <div className='gpt3__header-content__people'>
       <img src={people} alt='people' />
       <p>1,600,000 people requested access in last 24 hours</p>
      </div>

      </div>
        <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
    
    </div>
   </div>
  )
}

export default Header
