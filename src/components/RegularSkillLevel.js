import React from 'react';
import StarIconEmpty from './skillsIcons/StarIconEmpty';
import StarIconFilled from './skillsIcons/StarIconFilled';

const RegularSkillLevel = () => (
  <div className='item__level' title='Advanced level, subjective rating based on the time spent with a given technology'>
    <StarIconFilled />
    <StarIconFilled />
    <StarIconFilled />
    <StarIconEmpty />
  </div>
);

export default RegularSkillLevel;
