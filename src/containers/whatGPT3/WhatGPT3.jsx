import React from 'react';
import { Feature } from '../../components'
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
    <div className='gpt3__whatgpt3-feature'>
      <Feature title="Why monkeys?" text='Because monkeys are cool as fuck, these fuckers fling poop at people an smoke cigarettes. ' />
    </div>
    <div className='gpt3__whatgpt3-heading'>
      <h1 className='gradient__text'>Return to your monkey ancestry </h1>
      <p>Explore the library</p>
    </div>
    <div className='gpt3__whatgpt3-container'>
      <Feature title="Mandrills"  text="Mandrills (Mandrillus sphinx), which live in the tropical rainforests of central west Africa, are easily recognizable because of the vibrant coloration of their faces and behinds."  />
      <Feature title="Capuchins" text="Capuchins were one of the first primates other than apes to be observed engaging in highly skilled tool use in the wild. According to an archaeological study of capuchin stone tool use, wild bearded capuchins have been using tools for more than 3,000 years"/>
      <Feature title="Howler Monkeys" text="While all monkeys can make their presence known, howler monkeys have one of the loudest calls of any land mammal. Humans can hear a howler monkey’s roar from a distance of three miles." />
    </div>
   </div>
  )
}

export default WhatGPT3