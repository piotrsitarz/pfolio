import React from 'react';
import { Link } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import BackSvgIcon from './BackSvgIcon';
import ProjectsGallery from './ProjectsGallery';

const ProjectsPage = () => (
  <div className='page-container page-container--steel-blue'>
    <Link className='page-link--back page-link--sunshine' to='/' title='wróć do menu'>
      <BackSvgIcon />
    </Link>
    <CSSTransition
      in={true}
      appear={true}
      timeout={400}
      classNames='fade'
    >
      <ProjectsGallery />
    </CSSTransition>
  </div>
);

export default ProjectsPage;
