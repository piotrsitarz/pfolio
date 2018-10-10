import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTailsRoutingStore } from '../../actions/tails';
import TailProjects from './MainPageTailProjects';
import TailAbout from './MainPageTailAbout';
import TailSkills from './MainPageTailSkills';
import TailContact from './MainPageTailContact';

const MainPageAnimationRouterTails = (props) => (
  <div>
    <Link
      className='tail tail--steel-blue tail--router a' to='/projects'
      onClick={() => {props.dispatch(changeTailsRoutingStore())}}>
      <TailProjects />
    </Link>
    <Link
      className='tail tail--bone tail--router' to='/about'
      onClick={() => {props.dispatch(changeTailsRoutingStore())}}>
      <TailAbout />
    </Link>
    <Link
      className='tail tail--coal tail--router' to='/skills'
      onClick={() => {props.dispatch(changeTailsRoutingStore())}}>
      <TailSkills />
     </Link>
    <Link
      className='tail tail--sunshine tail--router' to='/contact'
      onClick ={() => { props.dispatch(changeTailsRoutingStore())}}>
      <TailContact />
     </Link>
  </div>
);

export default connect()(MainPageAnimationRouterTails);
