import React from 'react';
import StarIconEmpty from './skillsIcons/StarIconEmpty';
import StarIconFilled from './skillsIcons/StarIconFilled';

const RegularSkillLevel = () => (
  <div className='item__level'>
    <StarIconFilled />
    <StarIconFilled />
    <StarIconFilled />
    <StarIconEmpty />
  </div>
);

export default RegularSkillLevel;
