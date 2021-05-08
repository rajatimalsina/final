class Movie {

    constructor(obj_json) {
        this.name = obj_json["movie_results"][0].title;
        this.year = obj_json["movie_results"][0].year;
        this.rating = obj_json["movie_results"][0].imdb_rating;
        this.language = obj_json["movie_results"][0].language;
        this.genre = obj_json["movie_results"][0].genres;
        this.actors = obj_json["movie_results"][0].stars;
    }
}

Movie.find = async (id) => {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=" + id,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4559cb3c6cmsh0d87bf81ce28bdfp1d6a0bjsnc56aa28dc99d",
                "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
            }
        };
        let response = await $.ajax(settings);
        return new Movie(response);
};
