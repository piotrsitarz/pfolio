import React from 'react';
import StarIconEmpty from './skillsIcons/StarIconEmpty';
import StarIconFilled from './skillsIcons/StarIconFilled';

const BasicSkillLevel = () => (
  <div className='item__level' title='Basic level, subjective rating based on the time spent with a given technology'>
    <StarIconFilled />
    <StarIconFilled />
    <StarIconEmpty />
    <StarIconEmpty />
  </div>
);

export default BasicSkillLevel;
