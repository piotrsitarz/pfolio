import React from 'react';

const MainPageTailProjects = () => (
  <div className='tail-wrapper'>
    <div className='tail-wrapper__svg'>
      <svg viewBox='0 0 512 512'>
        <circle className='svg__circle' cx='89.3' cy='126.5' r='66.1'></circle>
        <path className='svg__leg-top' d='M63.2,65.7V9.7c0,0,0.3-5.4,6.8-7.1h37.1c0,0,6.9,0.6,8,5.9l0.4,57.2'></path>
        <path className='svg__pencil-contour' d='M138.7,82.6h288.4c0,0,1.7-0.5,4,1l55,36.7c0,0,6.3,5.5,0,12.3l-56,37.2c0,0-2,0.6-3.8,0.6l-287.6-0.1'></path>
        <path className='svg__leg-bottom' d='M115.4,187.3v259.3c0,0,0,7.2-6.9,8.2l-10.9,0.1l-0.1,46c0,0-7.5,16.7-16.6,0v-46l-12.3-0.5c0,0-5.5-0.7-5.5-7.8c0-7.1,0-259.3,0-259.3'></path>
        <line className='svg__scriber' x1='467' y1='107.6' x2='467' y2='145.5'></line>
        <line className='svg__pencil-verticle' x1='427.2' y1='82.6' x2='426.4' y2='170.4'></line>
        <line className='svg__pencil-horizontal' x1='155.3' y1='123' x2='426.8' y2='124.7'></line>
        <path className='svg__screw' d='M80.9,104.3c0,0,74.3,18.7,0,50.1'></path>
        <g>
        	<g>
        		<path className='svg__dash-first' d='M89.3,508.3c0,0,7.3-0.2,19.9-1.4'></path>
        		<path className='svg__dash' d='M151.5,500.7c100.8-19.3,292-86.8,323.7-322.1'></path>
        	</g>
        </g>
      </svg>
    </div>
    <div className='tail-wrapper__title'>
      <p className='tail__title tail__title--sunshine'>Projects</p>
    </div>
  </div>
);

export default MainPageTailProjects;
