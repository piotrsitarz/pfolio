import React from 'react';
import { Link } from 'react-router-dom';
import AnimationTails from '../components/MainPageAnimationTails';
import RouterTails from '../components/MainPageRouterTails';


const MainPage = () => (
  <div className="page-container">
      <AnimationTails />
      <RouterTails />
  </div>
);

export default MainPage;
