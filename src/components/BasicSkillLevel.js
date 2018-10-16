import React from 'react';
import StarIconEmpty from './skillsIcons/StarIconEmpty';
import StarIconFilled from './skillsIcons/StarIconFilled';

const BasicSkillLevel = () => (
  <div className='item__level'>
    <StarIconFilled />
    <StarIconFilled />
    <StarIconEmpty />
    <StarIconEmpty />
  </div>
);

export default BasicSkillLevel;
