import React from 'react';
import StarIconEmpty from './skillsIcons/StarIconEmpty';
import StarIconFilled from './skillsIcons/StarIconFilled';

const BasicSkillLevel = () => (
  <div className='item__level' title='poziom podstawowy, subiektywna ocena na podstawie czasu spędzonego z daną technologią'>
    <StarIconFilled />
    <StarIconFilled />
    <StarIconEmpty />
    <StarIconEmpty />
  </div>
);

export default BasicSkillLevel;
