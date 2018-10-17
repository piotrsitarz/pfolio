import React from 'react';
import { Link } from 'react-router-dom';
import BackSvgIcon from './BackSvgIcon';
import FrontEndSkills from './FrontEndSkills';
import BackEndSkills from './BackEndSkills';
import ToolsSkills from './ToolsSkills';
import Certificate from './Certificate';
import {CSSTransition} from 'react-transition-group';

const SkillsPage = () => (
  <div className='page-container page-container--black'>
    <Link className='page-link--back page-link--white' to='/' title='wróć do menu'>
      <BackSvgIcon />
    </Link>
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames='fade'
    >
      <div className='skills-container'>
        <FrontEndSkills />
        <BackEndSkills />
        <ToolsSkills />
        <Certificate />
      </div>
    </CSSTransition>
  </div>
);

export default SkillsPage;
