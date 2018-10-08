import React from 'react';
import { connect } from 'react-redux';
import AnimationTails from '../components/MainPageAnimationTails';
import AnimationRouterTails from '../components/MainPageAnimationRouterTails';
import AnimationMiddleLine from '../components/MainPageAnimationMiddleLine';
import TailsAfterAnimation from '../components/TailsAfterAnimation';

const MainPage = (props) => (
  <div className='page-container'>
    { !props.changedRouting ?
      ( <div>
          <AnimationMiddleLine />
          <AnimationTails />
          <AnimationRouterTails />
        </div>
      ) : (
         <TailsAfterAnimation />
       )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    changedRouting: state.tails.changedRouting
  };
};

export default connect(mapStateToProps)(MainPage);
