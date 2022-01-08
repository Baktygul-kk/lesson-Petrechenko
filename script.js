const numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
const mark = +prompt("На сколько оцените его?","");
const lastMovie2 = prompt("Один из последних просмотренных фильмов?", "");
const mark2 = +prompt("На сколько оцените его?","");


personalMovieDB.movies[lastMovie] = mark;
personalMovieDB.movies[lastMovie2] = mark2;


console.log(personalMovieDB);