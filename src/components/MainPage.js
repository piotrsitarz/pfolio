import React from 'react';
import AnimationTails from '../components/MainPageAnimationTails';
import AnimationRouterTails from '../components/MainPageAnimationRouterTails';
import AnimationMiddleLine from '../components/MainPageAnimationMiddleLine';


const MainPage = () => (
  <div className='page-container'>
      <AnimationMiddleLine />
      <AnimationTails />
      <AnimationRouterTails />
  </div>
);

export default MainPage;
