import React from 'react';
import { Link } from 'react-router-dom';
import BackSvgIcon from './BackSvgIcon';
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
import PostgreSqlIcon from './skillsIcons/PostgreSqlIcon';
import MongoDbIcon from './skillsIcons/MongoDbIcon';
import NodeJsIcon from './skillsIcons/NodeJsIcon';
import RubyIcon from './skillsIcons/RubyIcon';
import GitIcon from './skillsIcons/GitIcon';
import GulpIcon from './skillsIcons/GulpIcon';
import WebpackIcon from './skillsIcons/WebpackIcon';
import BasicSkillLevel from './BasicSkillLevel';
import RegularSkillLevel from './a';

const SkillsPage = () => (
  <div className='page-container page-container--black'>
    <Link className='page-link--back page-link--white' to='/' title='wróć do menu'>
      <BackSvgIcon />
    </Link>
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
          <BasicSkillLevel />
        </div>
        <div className='skills__item'>
          <ReduxIcon />
          <BasicSkillLevel />
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
      <div className='skills__column'>
        <p className='skills__paragraph'>Backend</p>
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
      <div className='skills__column skills__column--second'>
        <p className='skills__paragraph'>Tools</p>
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
    </div>
  </div>
);

export default SkillsPage;
