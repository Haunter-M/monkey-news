import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Tiny monkey fact'
    ,text: 'The Pygmy Marmoset is the world’s smallest known monkey. It’s about the size of a banana. That’s about 4 – 4 ½ inches.'
  },
  {
    title: 'Gold monkey fact'
    ,text: 'The furriest monkeys are Golden Snub-nosed Monkeys who live in the cold snowy mountains of China.'
  },
  {
    title: 'Fast monkey fact'
    ,text: 'Patas are the fastest monkeys (and the fastest primates!). They can run up to 35 miles per hour, or as fast as a race horse. They can sprint from zero to 33 miles an hour in just three seconds.'
  },
  {
    title: 'Spider monkey fact'
    ,text: 'Spider Monkey have no thumbs. But they have prehensile tails (that means they can grip the branch) that allow them to move gracefully from tree branch to tree branch.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
    <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>Be reminded of your primal past monthly with our groundbreaking newsletter</h1>
      <p>Enjoy some monkey facts on the house</p>
    </div>
    <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    </div>
  )
}

export default Features