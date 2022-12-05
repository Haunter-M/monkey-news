import React from 'react';
import PossibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
     <div className='gpt3__possibility-image'>
      <img src={PossibilityImage} alt="possibility" />
     </div>
     <div className='gpt3__possibility-content'>
      <h4>Request our newsletter to get started!</h4>
      <h1 className='gradient-text'>Monthly monkeys only a touch away</h1>
      <p>We here at Monkey newsletter pride ourselves on delivering top quality monkeys directly to your email.</p>
      <h4>You've never seen anything like it</h4>
     </div>
  </div>
  )
}

export default Possibility