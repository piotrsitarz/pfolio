import React from 'react';
import HtmlIcon from './skillsIcons/HtmlIcon';
import CssIcon from './skillsIcons/CssIcon';
import SassIcon from './skillsIcons/SassIcon';
import JavaScriptIcon from './skillsIcons/JavaScriptIcon';
import AngularJsIcon from './skillsIcons/AngularJsIcon';
import ReactIcon from './skillsIcons/ReactIcon';
import ReduxIcon from './skillsIcons/ReduxIcon';
import PhotoshopIcon from './skillsIcons/PhotoshopIcon';
import IllustratorIcon from './skillsIcons/IllustratorIcon';
import BootstrapIcon from './skillsIcons/BootstrapIcon';
import BasicSkillLevel from './BasicSkillLevel';
import RegularSkillLevel from './RegularSkillLevel';


const FrontEndSkills = () => (
  <div className='skills-container'>
    <p className='skills__paragraph skills__paragraph--front'>Frontend</p>
    <div className='skills__column'>
      <div className='skills__item'>
        <HtmlIcon />
        <RegularSkillLevel />
      </div>
      <div className='skills__item'>
        <CssIcon />
        <RegularSkillLevel />
      </div>
      <div className='skills__item'>
        <SassIcon />
        <BasicSkillLevel />
      </div>
      <div className='skills__item'>
        <BootstrapIcon />
        <BasicSkillLevel />
      </div>
      <div className='skills__item'>
        <JavaScriptIcon />
        <RegularSkillLevel />
      </div>
    </div>
    <div className='skills__column skills__column--second'>
      <div className='skills__item'>
        <AngularJsIcon />
        <RegularSkillLevel />
      </div>
      <div className='skills__item'>
        <ReactIcon />
        <RegularSkillLevel />
      </div>
      <div className='skills__item'>
        <ReduxIcon />
        <RegularSkillLevel />
      </div>
      <div className='skills__item'>
        <PhotoshopIcon />
        <BasicSkillLevel />
      </div>
      <div className='skills__item'>
        <IllustratorIcon />
        <BasicSkillLevel />
      </div>
    </div>
  </div>
);

export default FrontEndSkills;
