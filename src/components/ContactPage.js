import React from 'react';
import { Link } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import BackSvgIcon from './BackSvgIcon';

const ContactPage = () => (
  <div className='page-container page-container--sunshine'>
    <Link className='page-link--back page-link--steel-blue' to='/' title='wróć do menu'>
      <BackSvgIcon />
    </Link>
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames='fade'
    >
      <div className='contact-container'>
        <a className='contact__item' href='mailto:piotrsitarz@onet.eu'>
          <img className='contact__image' src='./images/email.svg' alt='email adress' title='email adress' />
          <p className='contact__paragraph'>piotrsitarz@onet.eu</p>
        </a>
        <a className='contact__item' href='tel:+48535428942'>
          <img className='contact__image' src='./images/phone.svg' alt='phone number' title='phone number' />
          <p className='contact__paragraph contact__paragraph--margin'>+48 535 428 942</p>
        </a>
        <a className='contact__item' href='https://www.facebook.com/profile.php?id=100017226726327' target="_blank" title='facebook account'>
          <img className='contact__image' src='./images/facebook.svg' alt='facebook account'/>
          <p className='contact__paragraph contact__paragraph--margin'>facebook</p>
        </a>
      </div>
    </CSSTransition>
  </div>
);

export default ContactPage;
