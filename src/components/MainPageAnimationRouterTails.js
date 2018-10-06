import React from 'react';
import { Link } from 'react-router-dom';

const MainPageAnimationRouterTails = () => (
  <div>
    <Link className='tail tail--steel-blue tail--router' to='/projects'></Link>
    <Link className='tail tail--bone tail--router' to='/about'></Link>
    <Link className='tail tail--coal tail--router' to='/skills'></Link>
    <Link className='tail tail--sunshine tail--router' to='/contact'></Link>
  </div>
);

export default MainPageAnimationRouterTails;
