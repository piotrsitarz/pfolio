import React from 'react';
import { Link } from 'react-router-dom';
import TailProjects from './MainPageTailProjects';
import TailAbout from './MainPageTailAbout';
import TailSkills from './MainPageTailSkills';
import TailContact from './MainPageTailContact';

const TailsAfterAnimation = () => (
  <div className='tails-container--full'>
    <Link className='tail tail--steel-blue' to='/projects'>
      <TailProjects />
    </Link>
    <div className='tail tail--sunshine'></div>
    <Link className='tail tail--white' to='/about'>
      <TailAbout />
    </Link>
    <div className='tail tail--black'></div>
    <div className='tail tail--sunshine'></div>
    <div className='tail tail--white'></div>
    <div className='tail tail--black'></div>
    <div className='tail tail--steel-blue'></div>
    <div className='tail tail--white'></div>
    <Link className='tail tail--black' to='/skills'>
      <TailSkills />
    </Link>
    <div className='tail tail--steel-blue'></div>
    <Link className='tail tail--sunshine' to='/contact'>
      <TailContact />
    </Link>
  </div>
);

export default TailsAfterAnimation;
