import React from 'react';
import MainPageAnimationTailsLeft from '../components/MainPageAnimationTailsLeft';
import MainPageAnimationTailsRight from '../components/MainPageAnimationTailsRight';
import MainPageAnimationTailsWrapper from '../components/MainPageAnimationTailsWrapper';
import MainPageAnimationTailsTop from '../components/MainPageAnimationTailsTop';
import MainPageAnimationTailsBottom from '../components/MainPageAnimationTailsBottom';

const MainPageAnimationTails = () => (
  <div>
    <MainPageAnimationTailsLeft  />
    <MainPageAnimationTailsRight />
    <MainPageAnimationTailsWrapper />
    <MainPageAnimationTailsTop />
    <MainPageAnimationTailsBottom />
  </div>
);

export default MainPageAnimationTails;
