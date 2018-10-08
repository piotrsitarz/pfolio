import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTailsRoutingStore } from '../actions/tails';

const MainPageAnimationRouterTails = (props) => (
  <div>
    <Link
      className='tail tail--steel-blue tail--router' to='/projects'
      onClick={() => {props.dispatch(changeTailsRoutingStore())}}>
    </Link>
    <Link
      className='tail tail--bone tail--router' to='/about'
      onClick={() => {props.dispatch(changeTailsRoutingStore())}}>
    </Link>
    <Link
      className='tail tail--coal tail--router' to='/skills'
      onClick={() => {props.dispatch(changeTailsRoutingStore())}}>
     </Link>
    <Link
      className='tail tail--sunshine tail--router' to='/contact'
      onClick ={() => { props.dispatch(changeTailsRoutingStore())}}>
     </Link>
  </div>
);

export default connect()(MainPageAnimationRouterTails);
