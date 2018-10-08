import React from 'react';
import { Link } from 'react-router-dom';

const TailsAfterAnimation = () => (
  <div className='tails-container--full'>
    <Link className='tail tail--steel-blue' to='/projects'></Link>
    <div className='tail tail--sunshine'></div>
    <Link className='tail tail--bone' to='/about'></Link>
    <div className='tail tail--coal'></div>
    <div className='tail tail--sunshine'></div>
    <div className='tail tail--bone'></div>
    <div className='tail tail--coal'></div>
    <div className='tail tail--steel-blue'></div>
    <div className='tail tail--bone'></div>
    <Link className='tail tail--coal' to='/skills'></Link>
    <div className='tail tail--steel-blue'></div>
    <Link className='tail tail--sunshine' to='/contact'></Link>
  </div>
);

export default TailsAfterAnimation;
