const projectsReducerDefaultState = [
  {
  imgUrl: './images/agency.png',
  onlineUrl:'https://piotrsitarz.github.io/Agency/',
  githubUrl:'https://github.com/piotrsitarz/Agency_dev',
  indeks: 1,
  description: 'website agency picture',
  type: 'Strona',
  technologies: 'HTML5, CSS3, Bootstrap'
},{
  imgUrl: './images/cookies.png',
  onlineUrl:'https://piotrsitarz.github.io/Cookies/',
  githubUrl:'https://github.com/piotrsitarz/Cookies_dev',
  indeks: 2,
  description: 'website cookies picture',
  type: 'Strona',
  technologies: 'HTML5, CSS3, jQuery'
},{
  imgUrl: './images/clothes.png',
  onlineUrl:'https://piotrsitarz.github.io/Clothes/',
  githubUrl:'https://github.com/piotrsitarz/Clothes_dev',
  indeks: 3,
  description: 'website clothes picture',
  type: 'Strona',
  technologies: 'HTML5, CSS3, Sass, jQuery'
},{
  imgUrl: './images/sailors.png',
  onlineUrl:'https://piotrsitarz.github.io/Sailors/',
  githubUrl:'https://github.com/piotrsitarz/Sailors_dev',
  indeks: 4,
  description: 'website sailors picture',
  type: 'Strona',
  technologies: 'HTML5, CSS3, jQuery'
},{
  imgUrl: './images/smog.png',
  onlineUrl:'https://piotr-sitarz-smog.herokuapp.com/',
  githubUrl:'https://github.com/piotrsitarz/smog-app',
  indeks: 5,
  description: 'smog app picture',
  type: 'Aplikacja',
  technologies: 'HTML5, CSS3, JavaScript, AngularJS, AngularJS Material, Angular-nvD3, Google Maps API, Node.js, Gulp'
},{
  imgUrl: './images/wedding.png',
  onlineUrl:'https://piotr-sitarz-wedding.herokuapp.com/',
  githubUrl:'https://github.com/piotrsitarz/wedding-app',
  indeks: 6,
  description: 'wedding app picture',
  type: 'Aplikacja',
  technologies: 'HTML5, CSS3, JavaScript, AngularJS, AngularJS Material, AngularJS-Dragula, Angular-xeditable, Moment.js, Google Maps API, Node.js, mongoDB, Gulp'
},{
  imgUrl: './images/movies.png',
  onlineUrl:'https://piotr-sitarz-movies.herokuapp.com/',
  githubUrl:'https://github.com/piotrsitarz/movie-app',
  indeks: 7,
  description: 'movies app picture',
  type: 'Aplikacja',
  technologies: 'HTML5, CSS3, JavaScript, AngularJS, AngularJS Material, Node.js, mongoDB, Gulp'
},{
  imgUrl: './images/expensify.png',
  onlineUrl:'https://piotr-sitarz-expensify.herokuapp.com/',
  githubUrl:'https://github.com/piotrsitarz/expensify-app',
  indeks: 8,
  description: 'expensify app picture',
  technologies: 'HTML5, CSS3, JavaScript, React, Redux, Node.js, mongoDB, Babel, webpack',
  type: 'Aplikacja'
},{
  imgUrl: './images/portfolio.png',
  onlineUrl:'https://piotr-sitarz-portfolio.herokuapp.com/',
  githubUrl:'https://github.com/piotrsitarz/pfolio',
  indeks: 9,
  description: 'website portfolio picture',
  technologies: 'HTML5, CSS3, JavaScript, React, Redux, Node.js, Babel, webpack',
  type: 'Strona'
}];

export default (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
