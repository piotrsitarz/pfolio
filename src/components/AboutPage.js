import React from 'react';
import { Link } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import BackSvgIcon from './BackSvgIcon';

const AboutPage = () => (
  <div className='page-container page-container--white'>
    <Link className='page-link--back page-link--black' to='/' title='wróć do menu'>
      <BackSvgIcon />
    </Link>
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames='fade'
    >
      <div className='about-container'>
        <div className='about__item about__item--image'>
          <img className='about__image' src='./images/face.jpg' alt='author face picture' />
        </div>
        <div className='about__item about__item--description'>
          <p className='about__paragraph'>Hello, my name is <span className='about__paragraph--underline'>Piotrek</span>.  I started to be interested in programming two years ago, and I created my first repositories on the
          <a className='about__paragraph--underline' href='https://github.com/piotrsitarz' target="_blank" title='mój profil github'> github</a> platform on 05/04/2017. I have 11 months of commercial experience as a programmer
          at TECH Sterowniki where I used technologies such as Ruby, PostgreSQL, AngularJS. I want to develop in a company that focuses on the <span className='about__paragraph--underline'>development</span> of an employee and uses the latest technology.
          If I found the right place,  <Link className='about__paragraph--underline' to='/contact' title='kontakt'>contact</Link> me.
          </p>
        </div>
      </div>
    </CSSTransition>
  </div>
);

export default AboutPage;
