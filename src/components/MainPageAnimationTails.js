import React from 'react';
import { Link } from 'react-router-dom';

const MainPageAnimationTails = () => (
  <div>
    <div className="tails-container tails-containerv--left">
        <div className="tail tail--blue"></div>
        <div className="tail tail--blue"></div>
        <div className="tail tail--blue"></div>
        <div className="tail tail--blue tail--sticky"></div>
        <div className="tail tail--blue"></div>
        <div className="tail tail--blue"></div>
    </div>
    <div className="tails-container tails-container--right">
        <div className="tail tail--black"></div>
        <div className="tail tail--black"></div>
        <div className="tail tail--black tail--sticky"></div>
        <div className="tail tail--black"></div>
        <div className="tail tail--black"></div>
        <div className="tail tail--black"></div>
    </div>
    <div className="tails-wrapper tails-wrapper--left">
    </div>
    <div className="tails-wrapper tails-wrapper--right">
    </div>
    <div className="tails-layer tails-layer--bottom">
        <div className="tail tail--green"></div>
        <div className="tail tail--green"></div>
        <div className="tail tail--green"></div>
        <div className="tail tail--green"></div>
    </div>
    <div className="tails-layer tails-layer--top">
        <div className="tail tail--red"></div>
        <div className="tail tail--red"></div>
        <div className="tail tail--red"></div>
        <div className="tail tail--red "></div>
    </div>
  </div>
);

export default MainPageAnimationTails;
