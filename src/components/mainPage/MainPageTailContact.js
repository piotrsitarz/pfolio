import React from 'react';

const MainPageTailContact = () => (
  <div className='tail-wrapper'>
    <div className='tail-wrapper__svg'>
      <svg viewBox='0 0 511.9 511.9'>
        <g>
          <path className='svg__airplane' d='M2.1,251.1l151.8,73.2l41.9,169.9c15.8,22.1,28.7,0,28.7,0l79.1-95.7l115.6,53.3c26.9,2,28.3-25.2,28.3-25.2l58.3-401.3c-1.4-28.5-23-20.2-23-20.2L52.5,211.2'></path>
          <line className='svg__airplane-middle--short' x1='163.8' y1='305.3' x2='370.1' y2='123.7'></line>
          <line className='svg__airplane-middle' x1='267.3' y1='341.6' x2='470.1' y2='58.8'></line>
          <polyline className='svg__airplane-connector' points='206.1,503.2 251.4,373.3 303.6,398.5'></polyline>
        </g>
      </svg>
    </div>
    <div className='tail-wrapper__title'>
      <p className='tail__title tail__title--steel-blue'>Contact</p>
    </div>
  </div>
);

export default MainPageTailContact;
