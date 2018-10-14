import React from 'react';
import { Link } from 'react-router-dom';
import BackSvgIcon from './BackSvgIcon';

const AboutPage = () => (
  <div className='page-container page-container--bone'>
    <Link className='page-link--back page-link--coal' to='/' title='wróć do menu'>
      <BackSvgIcon />
    </Link>
    <div className='about-container'>
      <div className='about__item about__item--image'>
        <img className='about__image' src='./images/face.jpg' alt='author face picture' />
      </div>
      <div className='about__item about__item--description'>
        <p className='about__paragraph'>Witaj, nazywam się <span className='about__paragraph--underline'>Piotrek</span>. Programowaniem zacząłem interesować się dwa lata temu, a moje pierwsze repozytoria na platformie github stworzyłem
         05.04.2017. Posiadam <span className='about__paragraph--underline'>11 miesięcy</span> komercyjnego doświadczenia jako programista w firmie TECH Sterowniki. W swojej przyszłej pracy chciałbym przede wszystkim doskonalić <span className='about__paragraph--underline'>JavaScript</span>,
        React by w końcu przejść do React Native. Nie chcę mieć styczności z PHP, jQuery oraz WordPressem. Pragnę rozwijać się w firmie, która stawia na <span className='about__paragraph--underline'>rozwój</span> pracownika i używa
        najnowszych technologii. Jeżeli dobrze trafiłem <Link className='about__paragraph--underline' to='/contact' title='kontakt'>skontaktuj</Link> się ze mną.
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
