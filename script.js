const numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель!");
} else if (personalMovieDB.count >= 31) {
  console.log("Вы киноман!");
} else {
  "Произошла ошибка";
}

for (let i = 0; i < 2; i++) {
  const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
  const mark = +prompt("На сколько оцените его?", "");
  if (lastMovie != null && mark != null && lastMovie != "" && mark != ""){
    personalMovieDB.movies[lastMovie] = mark;
    console.log("done");
  }else {
console.log("error");
i--;
  }
}

console.log(personalMovieDB);
