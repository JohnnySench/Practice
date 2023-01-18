'use strict';

let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();





const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function writeYourGenres(arr) {
    for (let i = 0; i <= 2; i++) {
        arr[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}
writeYourGenres(personalMovieDB.genres);



function showMyDB(field) {
    if (!field) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


for (let i = 0; i < 2; i++) {
    let a = prompt('Один из просмотренных фильмов?', ''),
        b = +prompt('На сколько оцените его?', '');
      

        if (a === '' || a === null || a.length >= 50 || b === '' || b === null) {
            i--;
        } else {
            personalMovieDB.movies[a] = b;
        }
}
if (numberOfFilms < 10) {
    console.log('Просмотрено мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log('Вы классический зритель');
} else if (numberOfFilms > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);


