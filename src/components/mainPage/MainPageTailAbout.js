import React from 'react';

const MainPageTailAbout = () => (
  <div className='tail-wrapper'>
    <div className='tail-wrapper__svg'>
      <svg viewBox='0 0 512 512'>
        <g>
          <path className='svg__hacker-contour' d='M113.5,232.4c0,0-50.5-28.4,0-84.4l90.5-125.9c0,0,48.7-43.9,106.3,0l102,145.7c0,0,26.8,32.4-14,64.6c0,0,33.5,24.4,43.3,50.2L488.5,425c0,0,7.9,69.1-55.8,84.5H84c0,0-67.6-10.6-59.3-85.6l45.9-142.1C70.6,281.8,100.1,232.8,113.5,232.4z'></path>
          <path className='svg__notebook' d='M121,509.5V355c0,0-3.4-33,37.9-44.4h194.2c0,0,32.9-2.6,37.9,44.4v154.5'></path>
          <line className='svg__notebook-line' x1='211' y1='403' x2='301' y2='403'></line>
          <path className='svg__hood' d='M331,156.5l-1.4,21.5c-75.5,133-148.5,0-148.5,0v-21.6c0,0-65.6,15.1-59.3,40.4L256,310.5l129.2-106.4C385.2,204.2,413.9,178,331,156.5z'></path>
          <path className='svg__face' d='M181.1,156.4c0,0,48.8-21.3,149.9,0.2'></path>
        </g>
      </svg>
    </div>
    <div className='tail-wrapper__title'>
      <p className='tail__title tail__title--black'>About Me</p>
    </div>
  </div>
);

export default MainPageTailAbout;
