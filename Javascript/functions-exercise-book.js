"use strict;"
const movies = [
    {
        "title": "Jaws",
        "director": "Steven Spielberg",
        "year": "1975"
    },
    {
        "title": "Star Wars",
        "director": "George Lucas",
        "year": "1977"
    },
    {
        "title": "Avengers: Infinity War",
        "director": "Anthony and Joe Russo",
        "year": "2018"
    },
    {
        "title": "Top Gun",
        "director": "Tony Scott",
        "year": "1986"
    },
    {
        "title": "Justice League",
        "director": "Zack Snyder",
        "year": "2017"
    }
];

// let findMovie = function(movieTitle) {
//     for (let movie of movies) {
//         if (movie.title == movieTitle) {
//             console.log(`Movie: ${movie.title}\nDirector: ${movie.director}\nYear: ${movie.year}`);
//             console.log(movie);
//         }
//     }
// }

// findMovie("Star Wars");
// let movie = "Thor: Ragnarok";
// console.log(movie);
// findMovie(movie);

let returnMovie = function(movieTitle) {
    for (let movie of movies) {
        if (movie.title == movieTitle) {
            return movie;
        }
        console.log(movie);
    }
    // console.log("Any text, any text at all");
    return "Movie not found";
};

let myMovie = returnMovie("Avengers: Infinity War");
console.log(myMovie);
console.log(`Movie: ${myMovie.title}\nDirector: ${myMovie.director}\nYear: ${myMovie.year}`);

let myOtherMovie = returnMovie("Thor: Ragnarok");
console.log(myOtherMovie);

let myMovieDetails = function(anyMovie) {
    if (typeof anyMovie == "object") {
        return `Movie: ${anyMovie.title}\nDirector: ${anyMovie.director}\nYear: ${anyMovie.year}`;
    }
    return anyMovie;
}
console.log(myMovieDetails(returnMovie("Jaws")));