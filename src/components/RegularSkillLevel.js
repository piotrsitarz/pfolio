import React from 'react';
import StarIconEmpty from './skillsIcons/StarIconEmpty';
import StarIconFilled from './skillsIcons/StarIconFilled';

const RegularSkillLevel = () => (
  <div className='item__level' title='poziom dobry, subiektywna ocena na podstawie czasu spędzonego z daną technologią'>
    <StarIconFilled />
    <StarIconFilled />
    <StarIconFilled />
    <StarIconEmpty />
  </div>
);

export default RegularSkillLevel;
