'use strict';



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB() {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    },
    writeYourGenres() {
        
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Напишите ваши любимые жанры через запятую`).toLowerCase();
            if (genres === '' || genres === null) {
                console.log(`Вы ввели неправильные данные`);
                i--;
            } else {
                this.genres = genres.split(', ').sort();
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    showMyDB(field) {
        if (!field) {
            console.log(this);
        }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его?', '');
              
        
                if (a === '' || a === null || a.length >= 50 || b === '' || b === null) {
                    i--;
                } else {
                    personalMovieDB.movies[a] = b;
                }
        }
    },
    detectedPersonalLevel() {
        if (this.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы классический зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    start() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    }
};













