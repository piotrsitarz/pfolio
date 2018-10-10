import React from 'react';
import { connect } from 'react-redux';
import AnimationTails from './MainPageAnimationTails';
import AnimationRouterTails from './MainPageAnimationRouterTails';
import AnimationMiddleLine from './MainPageAnimationMiddleLine';
import TailsAfterAnimation from './MainPageTailsAfterAnimation';

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
