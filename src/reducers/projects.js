const projectsReducerDefaultState = [
  {
  imgUrl: './images/agency.png',
  indeks: 1,
  description: 'website agency picture',
  type: 'Strona'
},{
  imgUrl: './images/cookies.png',
  indeks: 2,
  description: 'website cookies picture',
  type: 'Strona'
},{
  imgUrl: './images/clothes.png',
  indeks: 3,
  description: 'website clothes picture',
  type: 'Strona'
},{
  imgUrl: './images/sailors.png',
  indeks: 4,
  description: 'website sailors picture',
  type: 'Strona'
},{
  imgUrl: './images/wedding.png',
  indeks: 5,
  description: 'wedding app picture',
  type: 'Aplikacja'
},{
  imgUrl: './images/smog.png',
  indeks: 6,
  description: 'smog app picture',
  type: 'Aplikacja'
},{
  imgUrl: './images/movies.png',
  indeks: 7,
  description: 'movies app picture',
  type: 'Aplikacja'
},{
  imgUrl: './images/expensify.png',
  indeks: 8,
  description: 'expensify app picture',
  type: 'Aplikacja'
}];

export default (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
