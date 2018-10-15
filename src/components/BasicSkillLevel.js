import React from 'react';
import StarIconEmpty from './skillsIcons/StarIconEmpty';
import StarIconFilled from './skillsIcons/StarIconFilled';

const BasicSKillLevel = () => (
  <div className='item__level'>
    <StarIconFilled />
    <StarIconFilled />
    <StarIconEmpty />
    <StarIconEmpty />
  </div>
);

export default BasicSKillLevel;
