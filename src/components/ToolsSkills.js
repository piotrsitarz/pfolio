import React from 'react';
import GitIcon from './skillsIcons/GitIcon';
import GulpIcon from './skillsIcons/GulpIcon';
import WebpackIcon from './skillsIcons/WebpackIcon';
import BasicSkillLevel from './BasicSkillLevel';
import RegularSkillLevel from './RegularSkillLevel';


const ToolsSkills = () => (
  <div className='skills__column skills__column--second'>
    <p className='skills__paragraph skills__paragraph--start'>Tools</p>
    <div className='skills__item'>
      <GitIcon />
      <BasicSkillLevel />
    </div>
    <div className='skills__item'>
      <GulpIcon />
      <BasicSkillLevel />
    </div>
    <div className='skills__item'>
      <WebpackIcon />
      <BasicSkillLevel />
    </div>
  </div>
);

export default ToolsSkills;
