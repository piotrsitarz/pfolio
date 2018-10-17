import React from 'react';
import { Link } from 'react-router-dom';
import BackSvgIcon from './BackSvgIcon';
import {CSSTransition} from 'react-transition-group';

const ProjectsPage = () => (
  <div className='page-container page-container--steel-blue'>
    <Link className='page-link--back page-link--sunshine' to='/' title='wróć do menu'>
      <BackSvgIcon />
    </Link>
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames='fade'
    >
      <div className='projects-container'>
          <img src='./images/agency.png' alt=''></img>
      </div>
    </CSSTransition>
  </div>
);

export default ProjectsPage;
