import React from 'react';
import PostgreSqlIcon from './skillsIcons/PostgreSqlIcon';
import MongoDbIcon from './skillsIcons/MongoDbIcon';
import NodeJsIcon from './skillsIcons/NodeJsIcon';
import RubyIcon from './skillsIcons/RubyIcon';
import BasicSkillLevel from './BasicSkillLevel';
import RegularSkillLevel from './RegularSkillLevel';


const BackEndSkills = () => (
  <div className='skills__column'>
    <p className='skills__paragraph skills__paragraph--end'>Backend</p>
    <div className='skills__item'>
      <RubyIcon />
      <BasicSkillLevel />
    </div>
    <div className='skills__item'>
      <PostgreSqlIcon />
      <BasicSkillLevel />
    </div>
    <div className='skills__item'>
      <NodeJsIcon />
      <BasicSkillLevel />
    </div>
    <div className='skills__item'>
      <MongoDbIcon />
      <BasicSkillLevel />
    </div>
  </div>
);

export default BackEndSkills;
